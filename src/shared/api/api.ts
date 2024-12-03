import axios from "axios";
import { LOCAL_STORAGE_USER_TOKEN } from "shared/consts/localStorage";


export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_USER_TOKEN),
    },
});