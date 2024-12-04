import { StateSchema } from "app/providers/StoreProvider";

export const getUserInvited = (state: StateSchema) => state.user._invited;