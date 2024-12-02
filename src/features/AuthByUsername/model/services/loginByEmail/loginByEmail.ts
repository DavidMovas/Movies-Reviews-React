import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  userActions } from "enteties/User";
import i18n from "shared/config/i18n/i18n";
import { LOCAL_STORAGE_USER_TOKEN} from "shared/consts/localStorage";
import { UserToken } from "enteties/User/model/types/user";

interface LoginByEmailProps {
    email: string,
    password: string
}

export const loginByEmail = createAsyncThunk<UserToken, LoginByEmailProps, {rejectValue: string}>(
    "login/loginByEmail",
    async (authData:LoginByEmailProps, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", authData);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LOCAL_STORAGE_USER_TOKEN, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(i18n.t('You entered wrong email or password'));
        }
    },
);
