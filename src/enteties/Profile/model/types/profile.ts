export enum ValidateProfileError {
    INCORRECT_DATA = 'INCORRECT_DATA',
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
    EMPTY_USERNAME = 'EMPTY_USERNAME',
    USERNAME_LESS_THAN_MIN = 'USERNAME_LESS_THAN_MIN',
    USERNAME_MORE_THAN_MAX = 'USERNAME_MORE_THAN_MAX',
    EMPTY_EMAIL = 'EMPTY_EMAIL',
    INCORRECT_EMAIL = 'INCORRECT_EMAIL',
    EMPTY_BIO = 'EMPTY_BIO',
    BIO_MORE_THAN_MAX = 'BIO_MORE_THAN_MAX',
}

export interface Profile {
    username?: string;
    email?: string;
    avatarUrl?: string;
    role?: string;
    bio?: string
    created_at?: string;
    deleted_at?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];

}