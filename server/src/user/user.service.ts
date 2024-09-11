import { ConflictException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './entities/user.entity'
import { Model } from 'mongoose'
import { validateObjectId } from 'src/helpers/helpers'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwt: JwtService,
  ) {}

  /// CRUD
  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.findUserByEmail(createUserDto.email)
    if (existingUser) {
      throw new ConflictException('User with this email already exists')
    }

    const hashedPassword = await argon2.hash(createUserDto.password)

    const user = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    })

    return user.save()
  }

  async findAllUsers() {
    return this.userModel.find().populate('notes').exec()
  }

  async findOneUser(id: string) {
    validateObjectId(id, 'User not found')
    return this.userModel.findById(id).populate('notes').exec()
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    validateObjectId(id, 'User not found')
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec()
  }

  async removeUser(id: string) {
    validateObjectId(id, 'User not found')

    const user = await this.userModel.findById(id).exec()
    if (!user) {
      throw new ConflictException('User not found')
    }

    const deletedUser = await this.userModel.findByIdAndDelete(id).exec()
    if (!deletedUser) {
      throw new Error('Failed to delete user')
    }

    return deletedUser
  }

  /// HELPERS
  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec()
  }

  private generateToken(email: string): string {
    return this.jwt.sign({ email })
  }
}
