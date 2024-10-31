import React from 'react';
import './Counter.module.scss';

export function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className={'container'}>
            <h1 className={'title'}>Counter</h1>
            <button className={'btn'} onClick={increment}>Count: {count}</button>
        </div>
    );
}