import { Document, Types } from 'mongoose';
export type NoteDocument = Document & Note;
export declare class Note {
    content: string;
    user: Types.ObjectId;
}
export declare const NoteSchema: import("mongoose").Schema<Note, import("mongoose").Model<Note, any, any, any, Document<unknown, any, Note> & Note & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Note, Document<unknown, {}, import("mongoose").FlatRecord<Note>> & import("mongoose").FlatRecord<Note> & {
    _id: Types.ObjectId;
}>;
