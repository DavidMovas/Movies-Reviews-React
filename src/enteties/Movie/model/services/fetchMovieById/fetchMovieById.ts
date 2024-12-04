import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { MovieDetails } from "enteties/Movie";
import axios from "axios";

export enum ResponseError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const fetchMovieById = createAsyncThunk<MovieDetails, string, ThunkConfig<ResponseError>>(
    "movies/fetchMovieById",
    async (movieId, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<MovieDetails>(`/api/movies/${movieId}`);

            return response.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const statusCode = err.response?.status;

                if (statusCode === 400) {
                    return rejectWithValue(ResponseError.INCORRECT_DATA);
                }

                if (statusCode === 404) {
                    return  rejectWithValue(ResponseError.NOT_FOUND);
                }
            }

            return rejectWithValue(ResponseError.SERVER_ERROR);
        }
    },
);
