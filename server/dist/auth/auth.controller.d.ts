import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        email: string;
        name: string;
        access_token: string;
    }>;
    getProfile(req: any): Promise<{
        email: string;
        name: string;
    }>;
}
