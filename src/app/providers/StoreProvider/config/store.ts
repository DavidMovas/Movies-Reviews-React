import  {configureStore} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "enteties/Counter";

export  function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}