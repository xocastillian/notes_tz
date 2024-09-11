import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    create(createNoteDto: CreateNoteDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateNoteDto: Partial<CreateNoteDto>): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
