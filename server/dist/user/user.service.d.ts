import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userModel;
    private readonly jwt;
    constructor(userModel: Model<User>, jwt: JwtService);
    createUser(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAllUsers(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findOneUser(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    removeUser(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findUserByEmail(email: string): Promise<User | null>;
    private generateToken;
}
