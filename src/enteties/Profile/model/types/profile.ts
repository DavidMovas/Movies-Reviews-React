export interface Profile {
    username: string;
    email: string;
    avatarUrl: string;
    role: string;
    bio?: string
    created_at: string;
    deleted_at?: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}