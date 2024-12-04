import { Cast } from "enteties/Star";
import { Genre } from "enteties/Genre";

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    AvgRating?: number;
    posterUrl?: string;
    version?: number;
    createdAt: string;
}

export interface MovieDetails {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    AvgRating?: number;
    posterUrl?: string;
    version?: number;
    createdAt: string;
    genres: Genre[];
    cast: Cast[];
}