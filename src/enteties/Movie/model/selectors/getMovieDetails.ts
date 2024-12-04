import { StateSchema } from "app/providers/StoreProvider";


export const getMovieDetailsData = (state: StateSchema)=> state.movies.data;
export const getMovieDetailsIsLoading = (state: StateSchema)=> state.movies.isLoading;
export const getMovieDetailsError = (state: StateSchema)=> state.movies.error;