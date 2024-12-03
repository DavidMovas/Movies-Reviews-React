import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  userActions } from "enteties/User";
import { LOCAL_STORAGE_USER_TOKEN} from "shared/consts/localStorage";
import { UserToken } from "enteties/User/model/types/user";

interface LoginByEmailProps {
    email: string | undefined,
    password: string | undefined,
}

export enum LoginError {
    INCORRECT_DATA = "INCORRECT_DATA",
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
}

export const loginByEmail = createAsyncThunk<UserToken, LoginByEmailProps, {rejectValue: string}>(
    "login/loginByEmail",
    async (authData:LoginByEmailProps, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", authData);

            localStorage.setItem(LOCAL_STORAGE_USER_TOKEN, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const statusCode = err.response?.status;

                if (statusCode === 400) {
                    return thunkAPI.rejectWithValue(LoginError.INCORRECT_DATA);
                }

                if (statusCode === 404) {
                    return  thunkAPI.rejectWithValue(LoginError.NOT_FOUND);
                }
            }

            return thunkAPI.rejectWithValue(LoginError.SERVER_ERROR);
        }
    },
);
