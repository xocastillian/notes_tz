import { Module } from '@nestjs/common'
import { NoteService } from './note.service'
import { NoteController } from './note.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Note, NoteSchema } from './entities/note.entity'

@Module({
	imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])],
	controllers: [NoteController],
	providers: [NoteService],
})
export class NoteModule {}
