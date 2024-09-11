import { Note } from './entities/note.entity';
import { Model, Types } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
export declare class NoteService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    createNote(createNoteDto: CreateNoteDto): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
    findAllNotes(): Promise<(import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    })[]>;
    findOneNote(id: string): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
    updateNote(id: string, updateNoteDto: Partial<CreateNoteDto>): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
    removeNote(id: string): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
}
