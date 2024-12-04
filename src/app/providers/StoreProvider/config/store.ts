import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "enteties/User";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "enteties/Profile";
import { moviesReducer } from "enteties/Movie/model/slices/movieDetailsSlice";
import { $api } from "shared/api/api";
import type { To } from "@remix-run/router";
import type { NavigateOptions } from "react-router/dist/lib/context";

export  function createReduxStore(initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        movies: moviesReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
    });

    // @ts-expect-error store.reducerManager
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];