import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetailsSchema } from "enteties/Movie/model/types/movieDetailsSchema";
import { fetchMovieById } from "enteties/Movie/model/services/fetchMovieById/fetchMovieById";
import { MovieDetails } from "enteties/Movie";

const initialState: MovieDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<MovieDetails>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const  {actions: moviesActions} = moviesSlice;
export const {reducer: moviesReducer} = moviesSlice;