import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Note } from './entities/note.entity'
import { Model, Types } from 'mongoose'
import { CreateNoteDto } from './dto/create-note.dto'
import { validateObjectId } from 'src/helpers/helpers'
import { User } from 'src/user/entities/user.entity'

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note.name) private noteModel: Model<Note>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createNote(createNoteDto: CreateNoteDto, user: User) {
    validateObjectId(user._id.toString(), 'User not found')

    const note = new this.noteModel({
      ...createNoteDto,
      user: user._id,
    })

    await note.save()
    await this.userModel.findByIdAndUpdate(user._id, { $push: { notes: note._id } }, { new: true })

    return note
  }

  async findAllNotes(user: User) {
    validateObjectId(user._id.toString(), 'User not found')
    return this.noteModel.find({ user: user._id }).populate('user').exec()
  }

  async findOneNote(id: string, user: User) {
    validateObjectId(id, 'Note not found')

    const note = await this.noteModel.findOne({ _id: id, user: user._id }).populate('user').exec()
    if (!note) throw new NotFoundException('Note not found or not authorized to access')
    return note
  }

  async updateNote(id: string, updateNoteDto: Partial<CreateNoteDto>, user: User) {
    validateObjectId(id, 'Note not found')

    const note = await this.noteModel.findOne({ _id: id, user: user._id }).exec()
    if (!note) throw new NotFoundException('Note not found or not authorized to update')

    const updatedNote = await this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true }).exec()
    if (!updatedNote) throw new Error('Failed to update note')
    return updatedNote
  }

  async removeNote(id: string, user: User) {
    validateObjectId(id, 'Note not found')

    const note = await this.noteModel.findOne({ _id: id, user: user._id }).exec()
    if (!note) throw new NotFoundException('Note not found or not authorized to delete')
    return this.noteModel.findByIdAndDelete(id).exec()
  }
}
