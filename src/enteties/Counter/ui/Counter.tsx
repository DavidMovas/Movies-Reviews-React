import { Button, ButtonTheme } from "shared/ui/Button/Button";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "enteties/Counter/model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1>Value = {counterValue}</h1>
            <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={increment}>Increment</Button>
            <Button  theme={ButtonTheme.BACKGROUND_INVERTED} onClick={decrement}>Decrement</Button>
        </div>
    );
}