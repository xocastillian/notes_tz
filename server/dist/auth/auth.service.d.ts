import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User | null>;
    login(user: User): Promise<{
        _id: import("mongoose").Types.ObjectId;
        notes: import("../note/entities/note.entity").Note[];
        email: string;
        name: string;
        access_token: string;
    }>;
    getUser(user: User): Promise<{
        _id: import("mongoose").Types.ObjectId;
        notes: import("../note/entities/note.entity").Note[];
        email: string;
        name: string;
        access_token: string;
    }>;
}
