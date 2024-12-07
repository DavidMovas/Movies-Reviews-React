import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Text.module.css"

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    SMALL_S = "small-s",
    SMALL ='small',
    MEDIUM ='medium',
    LARGE = 'large'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

// eslint-disable-next-line react/display-name
export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.MEDIUM,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    }

    return (
        <div
            className={classNames(cls.Text, mods, [className])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});