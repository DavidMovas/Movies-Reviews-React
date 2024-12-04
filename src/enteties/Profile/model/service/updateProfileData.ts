import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm, Profile } from "enteties/Profile";
import axios from "axios";
import { getUserData } from "enteties/User";

export enum ResponseError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/updateProfileData",
    async (_, {extra, rejectWithValue, getState}) => {
        const userData = getUserData(getState());
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>(`/api/users/${userData.user?.id}`, formData);

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
