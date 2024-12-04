import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm, Profile } from "enteties/Profile";
import axios from "axios";
import { getUserData } from "enteties/User";
import { validateProfile } from "enteties/Profile/model/service/validateProfile/validateProfile";
import { ValidateProfileError } from "enteties/Profile/model/types/profile";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (_, {extra, rejectWithValue, getState}) => {
        const userData = getUserData(getState());
        const formData = getProfileForm(getState());

        const errors = validateProfile({profile: formData, username:true});
        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/api/users/${userData.user?.id}`, formData);

            return response.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const statusCode = err.response?.status;

                if (statusCode === 400) {
                    return rejectWithValue([ValidateProfileError.INCORRECT_DATA]);
                }

                if (statusCode === 404) {
                    return  rejectWithValue([ValidateProfileError.NOT_FOUND]);
                }
            }

            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
