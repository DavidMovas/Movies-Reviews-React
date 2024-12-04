import { StateSchema } from "app/providers/StoreProvider";

export const getLoginUserId = (state: StateSchema) => state.user.user?.id;