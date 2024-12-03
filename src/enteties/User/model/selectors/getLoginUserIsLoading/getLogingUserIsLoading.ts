import { StateSchema } from "app/providers/StoreProvider";


export const getLogingUserIsLoading = (state: StateSchema) => state.loginForm?.isLoading;