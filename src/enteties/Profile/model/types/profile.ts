import { UserRole } from "shared/consts/common";

export interface Profile {
    username: string;
    email: string;
    avatarUrl: string;
    role: UserRole;
    created_at: string;
    deleted_at: string | null;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}