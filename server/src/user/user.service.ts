import { ConflictException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './entities/user.entity'
import mongoose, { Model } from 'mongoose'
import { validateObjectId } from 'src/helpers/helpers'

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<User>) {}

	/// CRUD
	async createUser(createUserDto: CreateUserDto) {
		const existingUser = await this.findUserByEmail(createUserDto.email)
		if (existingUser) {
			throw new ConflictException('User with this email already exists')
		}

		const user = new this.userModel(createUserDto)
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
		return this.userModel.findByIdAndDelete(id).exec()
	}

	/// HELPERS
	private async findUserByEmail(email: string): Promise<User | null> {
		return this.userModel.findOne({ email }).exec()
	}
}
