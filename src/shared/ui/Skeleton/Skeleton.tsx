import React, { CSSProperties, memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Skeleton.module.css"

interface Skeleton {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number;
}

// eslint-disable-next-line react/display-name
export const Skeleton = memo((props: Skeleton) => {
    const {
        className,
        height,
        width,
        border,
    }  = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }


    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        >

        </div>
    );
});