export interface Star {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthPlace?: string;
    birthDate?: string;
    deathDate?: string;
    bio?: string;
    createdAt: string;
}

export interface Cast {
    star: Star;
    role?: string;
    details?: string;
}