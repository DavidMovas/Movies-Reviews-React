import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Button.module.css';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string;
}

export const Button:FC<ButtonProps>= (props) => {
    const {className, children, theme = ThemeButton.CLEAR,  ...otherProps} = props;

    return (
        <button
            className={
            classNames('Button', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};