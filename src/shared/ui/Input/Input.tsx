import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from "shared/lib/classNames/classNames";
import * as cls from "./Input.module.css"

type HTMLInputProps = Omit< InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    readonly?: boolean;
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
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const mods: Mods = {
        [cls.readonly]: readonly ?? false,
    }


    return (
        <div
            className={classNames(cls.InputWrapper, mods, [className])}
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
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});