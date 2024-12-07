export interface Star {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    avatarUrl?: string;
    createdAt: string;
}

export interface StarDetails {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    avatarUrl?: string;
    birthPlace?: string;
    birthDate?: string;
    deathDate?: string;
    bio?: string;
    createdAt: string;
}

export interface Cast {
    star: Star;
    role?: string;
    heroName?: string;
    details?: string;
}