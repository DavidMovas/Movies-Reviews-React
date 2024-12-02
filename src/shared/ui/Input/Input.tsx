import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Input.module.css"

type HTMLInputProps = Omit< InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        label,
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }


    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            {label && (
                <div className={cls.label}>
                    {`${label}: `}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );
});