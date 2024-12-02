import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema, UserToken } from "../types/user";
import { LOCAL_STORAGE_USER_TOKEN } from "shared/consts/localStorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserToken>) => {
            state.access_token = action.payload.access_token;
        },
        initAuthData: (state) => {
            const token = localStorage.getItem(LOCAL_STORAGE_USER_TOKEN);
            if (token) {
                state.access_token = JSON.parse(token);
            }
        },
        logout: (state) => {
            state.access_token = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN);
        }
    },
});

export const  {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;