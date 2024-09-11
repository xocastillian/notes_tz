import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../types';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    validate(payload: JwtPayload): Promise<{
        _id: import("mongoose").Types.ObjectId;
        email: string;
    }>;
}
export {};
