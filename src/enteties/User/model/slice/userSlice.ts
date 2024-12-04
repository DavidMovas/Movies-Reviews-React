import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/user";
import { LOCAL_STORAGE_USER, LOCAL_STORAGE_USER_TOKEN } from "shared/consts/localStorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserSchema>) => {
            state.user = action.payload.user;
            state.access_token = action.payload.access_token;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER);
            const token = localStorage.getItem(LOCAL_STORAGE_USER_TOKEN);

            if (user) {
                state.user = JSON.parse(user);
            }
            if (token) {
                state.access_token = JSON.parse(token);
            }
        },
        logout: (state) => {
            state.user = undefined;
            state.access_token = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER);
            localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN);
        }
    },
});

export const  {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;