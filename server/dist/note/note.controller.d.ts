import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    create(createNoteDto: CreateNoteDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateNoteDto: UpdateNoteDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/note.entity").Note> & import("./entities/note.entity").Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
