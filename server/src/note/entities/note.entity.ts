import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from 'src/user/entities/user.entity'

export type NoteDocument = Document & Note

@Schema({ timestamps: true })
export class Note {
  @Prop({ required: true })
  content: string

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  user: Types.ObjectId

  @Prop({ required: false })
  title?: string

  @Prop({ default: Date.now })
  createdAt: Date
}

export const NoteSchema = SchemaFactory.createForClass(Note)
