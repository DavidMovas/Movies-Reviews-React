import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileUsername, Profile } from "enteties/Profile";
import { getUserData } from "enteties/User";
import axios from "axios";

export enum ResponseError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, {extra, rejectWithValue, getState}) => {
        let username = getProfileUsername(getState())
        if (!username) {
            username = getUserData(getState()).user?.username
        }

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