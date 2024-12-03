import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  userActions } from "enteties/User";
import { LOCAL_STORAGE_USER_TOKEN} from "shared/consts/localStorage";
import { UserToken } from "enteties/User/model/types/user";
import { ThunkConfig } from "app/providers/StoreProvider";

interface LoginByEmailProps {
    email: string | undefined,
    password: string | undefined,
}

export enum LoginError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const loginByEmail = createAsyncThunk<UserToken, LoginByEmailProps, ThunkConfig<string>>(
    "login/loginByEmail",
    async (authData, {dispatch, extra, rejectWithValue}) => {
        try {
            const response = await extra.api.post("/api/auth/login", authData);

            localStorage.setItem(LOCAL_STORAGE_USER_TOKEN, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

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
