import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "enteties/User";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { counterReducer } from "enteties/Counter";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "enteties/Profile";

export  function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-expect-error store.reducerManager
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];