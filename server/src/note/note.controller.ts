import { Controller, Get, Post, Body, Param, Patch, Delete, ValidationPipe } from '@nestjs/common'
import { NoteService } from './note.service'
import { CreateNoteDto } from './dto/create-note.dto'

@Controller('note')
export class NoteController {
	constructor(private readonly noteService: NoteService) {}

	@Post()
	create(@Body(ValidationPipe) createNoteDto: CreateNoteDto) {
		return this.noteService.createNote(createNoteDto)
	}

	@Get()
	findAll() {
		return this.noteService.findAllNotes()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.noteService.findOneNote(id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body(ValidationPipe) updateNoteDto: Partial<CreateNoteDto>) {
		return this.noteService.updateNote(id, updateNoteDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.noteService.removeNote(id)
	}
}
