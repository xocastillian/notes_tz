import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Note } from 'src/note/entities/note.entity'

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

	_id?: Types.ObjectId
}

export const UserSchema = SchemaFactory.createForClass(User)
