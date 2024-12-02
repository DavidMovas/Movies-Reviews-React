export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    deletedAt: string | null;
}

export interface UserToken {
    access_token: string;
}

export interface UserSchema {
    authData?: User
    access_token?: string;
}