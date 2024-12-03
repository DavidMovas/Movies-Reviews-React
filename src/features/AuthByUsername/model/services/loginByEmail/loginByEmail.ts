import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions, UserSchema } from "enteties/User";
import { LOCAL_STORAGE_USER, LOCAL_STORAGE_USER_TOKEN } from "shared/consts/localStorage";
import { ThunkConfig } from "app/providers/StoreProvider";
import axios from "axios";

interface LoginByEmailProps {
    email: string | undefined,
    password: string | undefined,
}

export enum LoginError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const loginByEmail = createAsyncThunk<UserSchema, LoginByEmailProps, ThunkConfig<string>>(
    "login/loginByEmail",
    async (authData, {dispatch, extra, rejectWithValue}) => {
        try {
            const response = await extra.api.post("/api/auth/login", authData);

            const user: UserSchema = JSON.parse(JSON.stringify(response.data));

            console.log("username: ", user.user?.username)

            if (user.access_token) {
                localStorage.setItem(LOCAL_STORAGE_USER_TOKEN, JSON.stringify(user.access_token));
            }

            if (user.user) {
                localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user.user));
            }

            dispatch(userActions.setAuthData(user));

            return response.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const statusCode = err.response?.status;

                if (statusCode === 400) {
                    return rejectWithValue(LoginError.INCORRECT_DATA);
                }

                if (statusCode === 404) {
                    return  rejectWithValue(LoginError.NOT_FOUND);
                }
            }

            return rejectWithValue(LoginError.SERVER_ERROR);
        }
    },
);
