import { StateSchema } from "app/providers/StoreProvider";


export const getLoginUserEmail = (state: StateSchema) => state.loginForm?.email;