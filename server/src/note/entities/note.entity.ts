import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from 'src/user/entities/user.entity'

export type NoteDocument = Document & Note

@Schema()
export class Note {
	@Prop({ required: true })
	content: string

	@Prop({ type: Types.ObjectId, ref: User.name, required: true })
	user: Types.ObjectId
}

export const NoteSchema = SchemaFactory.createForClass(Note)
