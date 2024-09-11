import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Note } from './entities/note.entity'
import { Model, Types } from 'mongoose'
import { CreateNoteDto } from './dto/create-note.dto'
import { validateObjectId } from 'src/helpers/helpers'

@Injectable()
export class NoteService {
	constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

	async createNote(createNoteDto: CreateNoteDto) {
		validateObjectId(createNoteDto.user, 'User not found')

		const note = new this.noteModel(createNoteDto)
		return note.save()
	}

	async findAllNotes() {
		return this.noteModel.find().populate('user').exec()
	}

	async findOneNote(id: string) {
		validateObjectId(id, 'Note not found')

		const note = await this.noteModel.findById(id).populate('user').exec()
		return note
	}

	async updateNote(id: string, updateNoteDto: Partial<CreateNoteDto>) {
		validateObjectId(id, 'Note not found')

		const updatedNote = await this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true }).exec()
		if (!updatedNote) {
			throw new Error('Failed to update note')
		}
		return updatedNote
	}

	async removeNote(id: string) {
		validateObjectId(id, 'Note not found')
		return this.noteModel.findByIdAndDelete(id).exec()
	}
}
