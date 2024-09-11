import { Note } from './entities/note.entity';
import { Model, Types } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { User } from 'src/user/entities/user.entity';
export declare class NoteService {
    private noteModel;
    private userModel;
    constructor(noteModel: Model<Note>, userModel: Model<User>);
    createNote(createNoteDto: CreateNoteDto, user: User): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
    findAllNotes(user: User): Promise<(import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    })[]>;
    findOneNote(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
    updateNote(id: string, updateNoteDto: Partial<CreateNoteDto>, user: User): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
    removeNote(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: Types.ObjectId;
    }>;
}
