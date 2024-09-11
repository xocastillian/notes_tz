"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const mongoose_2 = require("mongoose");
const helpers_1 = require("../helpers/helpers");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        const existingUser = await this.findUserByEmail(createUserDto.email);
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const user = new this.userModel(createUserDto);
        return user.save();
    }
    async findAllUsers() {
        return this.userModel.find().populate('notes').exec();
    }
    async findOneUser(id) {
        (0, helpers_1.validateObjectId)(id, 'User not found');
        return this.userModel.findById(id).populate('notes').exec();
    }
    async updateUser(id, updateUserDto) {
        (0, helpers_1.validateObjectId)(id, 'User not found');
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
    async removeUser(id) {
        (0, helpers_1.validateObjectId)(id, 'User not found');
        return this.userModel.findByIdAndDelete(id).exec();
    }
    async findUserByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map