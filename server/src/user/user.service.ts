import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './entities/user.entity'
import mongoose, { Model } from 'mongoose'

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
		return this.userModel.find().exec()
	}

	async findOneUser(id: string) {
		this.validateObjectId(id)

		return this.userModel.findById(id).exec()
	}

	async updateUser(id: string, updateUserDto: UpdateUserDto) {
		this.validateObjectId(id)

		return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec()
	}

	async removeUser(id: string) {
		this.validateObjectId(id)
		return this.userModel.findByIdAndDelete(id).exec()
	}

	/// HELPERS
	private async findUserByEmail(email: string): Promise<User | null> {
		return this.userModel.findOne({ email }).exec()
	}

	private validateObjectId(id: string): void {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			throw new NotFoundException('User not found')
		}
	}
}
