import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Note } from 'src/note/entities/note.entity' // Adjust the import path if needed

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
	@Prop({ required: true })
	name: string

	@Prop({ unique: true, required: true })
	email: string

	@Prop({ required: true })
	password: string

	@Prop({ type: [{ type: Types.ObjectId, ref: 'Note' }] })
	notes: Note[]
}

export const UserSchema = SchemaFactory.createForClass(User)
