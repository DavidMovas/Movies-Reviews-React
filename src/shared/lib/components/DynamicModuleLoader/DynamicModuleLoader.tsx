import React, { FC, useEffect } from 'react';
import { useStore } from "react-redux";
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider";
import { Reducer } from "@reduxjs/toolkit";

interface DynamicModuleLoaderProps {
    key: StateSchemaKey;
    reducer: Reducer;
    children?: React.ReactNode;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
    const {children, key, reducer, removeAfterUnmount} = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        store.reducerManager.add(key, reducer);

        return () => {
            if(removeAfterUnmount) {
                store.reducerManager.remove(key);
            }
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
}