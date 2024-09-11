import { Controller, Get, Post, Body, Param, Patch, Delete, ValidationPipe, UseGuards, Request } from '@nestjs/common'
import { NoteService } from './note.service'
import { CreateNoteDto } from './dto/create-note.dto'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { UpdateNoteDto } from './dto/update-note.dto'

@UseGuards(JwtAuthGuard)
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body(ValidationPipe) createNoteDto: CreateNoteDto, @Request() req) {
    return this.noteService.createNote(createNoteDto, req.user)
  }

  @Get()
  findAll(@Request() req) {
    return this.noteService.findAllNotes(req.user)
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.noteService.findOneNote(id, req.user)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateNoteDto: UpdateNoteDto, @Request() req) {
    return this.noteService.updateNote(id, updateNoteDto, req.user)
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.noteService.removeNote(id, req.user)
  }
}
