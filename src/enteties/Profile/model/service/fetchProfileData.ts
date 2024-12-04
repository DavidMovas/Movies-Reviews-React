import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "enteties/Profile";
import axios from "axios";

interface ProfileUserProps {
    username: string;
}

export enum ResponseError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const fetchProfileData = createAsyncThunk<Profile, ProfileUserProps, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async ({username}, { extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<Profile>(`/api/users/username/${username}`, {
                headers: {
                    Authorization: undefined
                }
            });

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
