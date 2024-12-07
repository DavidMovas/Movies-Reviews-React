import { Cast } from "enteties/Star";
import { Genre } from "enteties/Genre";

export interface Movie {
    id: number;
    title: string;
    posterUrl?: string;
    description: string;
    releaseDate: string;
    avgRating?: number;
    version?: number;
    createdAt: string
}

export interface MovieDetails {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    avgRating?: number;
    posterUrl?: string;
    imdbRating?: number;
    imdbUrl?: string;
    metascore?: number;
    metascoreUrl?: string;
    version?: number;
    createdAt: string;
    genres: Genre[];
    cast: Cast[];
}