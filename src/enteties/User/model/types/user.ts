export interface User {
    id: number;
    username: string;
    email: string;
    avatarUrl: string;
    role: string;
    bio?: string;
    createdAt: string;
    deletedAt?: string;
}

export interface UserSchema {
    user?: User
    access_token?: string;

    _invited: boolean
}