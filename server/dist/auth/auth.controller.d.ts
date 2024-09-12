import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        _id: import("mongoose").Types.ObjectId;
        notes: import("../note/entities/note.entity").Note[];
        email: string;
        name: string;
        access_token: string;
    }>;
    getProfile(req: any): Promise<{
        _id: import("mongoose").Types.ObjectId;
        notes: import("../note/entities/note.entity").Note[];
        email: string;
        name: string;
        access_token: string;
    }>;
}
