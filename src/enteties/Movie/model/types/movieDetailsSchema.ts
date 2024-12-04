import { MovieDetails } from "enteties/Movie";
import { ResponseError } from "enteties/Movie/model/services/fetchMovieById/fetchMovieById";

export interface MovieDetailsSchema {
    isLoading: boolean;
    error?: ResponseError;
    data?: MovieDetails;
}