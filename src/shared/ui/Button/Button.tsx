import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
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
            classNames('Button', {}, [className, (theme === ThemeButton.CLEAR ? 'clear' : '')])}
            {...otherProps}
        >
            {children}
        </button>
    );
};