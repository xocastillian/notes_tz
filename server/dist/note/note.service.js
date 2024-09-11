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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const note_entity_1 = require("./entities/note.entity");
const mongoose_2 = require("mongoose");
const helpers_1 = require("../helpers/helpers");
const user_entity_1 = require("../user/entities/user.entity");
let NoteService = class NoteService {
    constructor(noteModel, userModel) {
        this.noteModel = noteModel;
        this.userModel = userModel;
    }
    async createNote(createNoteDto, user) {
        (0, helpers_1.validateObjectId)(user._id.toString(), 'User not found');
        const note = new this.noteModel({
            ...createNoteDto,
            user: user._id,
        });
        await note.save();
        await this.userModel.findByIdAndUpdate(user._id, { $push: { notes: note._id } }, { new: true });
        return note;
    }
    async findAllNotes(user) {
        (0, helpers_1.validateObjectId)(user._id.toString(), 'User not found');
        return this.noteModel.find({ user: user._id }).populate('user').exec();
    }
    async findOneNote(id, user) {
        (0, helpers_1.validateObjectId)(id, 'Note not found');
        const note = await this.noteModel.findOne({ _id: id, user: user._id }).populate('user').exec();
        if (!note)
            throw new common_1.NotFoundException('Note not found or not authorized to access');
        return note;
    }
    async updateNote(id, updateNoteDto, user) {
        (0, helpers_1.validateObjectId)(id, 'Note not found');
        const note = await this.noteModel.findOne({ _id: id, user: user._id }).exec();
        if (!note)
            throw new common_1.NotFoundException('Note not found or not authorized to update');
        const updatedNote = await this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true }).exec();
        if (!updatedNote)
            throw new Error('Failed to update note');
        return updatedNote;
    }
    async removeNote(id, user) {
        (0, helpers_1.validateObjectId)(id, 'Note not found');
        const note = await this.noteModel.findOne({ _id: id, user: user._id }).exec();
        if (!note)
            throw new common_1.NotFoundException('Note not found or not authorized to delete');
        return this.noteModel.findByIdAndDelete(id).exec();
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_entity_1.Note.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], NoteService);
//# sourceMappingURL=note.service.js.map