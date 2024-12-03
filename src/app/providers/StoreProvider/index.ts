import  {StoreProvider} from "./ui/StoreProvider";
import {createReduxStore, AppDispatch} from "./config/store";
import type {StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    AppDispatch,
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig
};