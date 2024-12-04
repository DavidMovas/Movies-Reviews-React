import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from "shared/lib/classNames/classNames";
import * as cls from "./Select.module.css"
import { useTranslation } from "react-i18next";

export interface SelectOption {
    value: string;
    content: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

// eslint-disable-next-line react/display-name
export const Select = memo((props: SelectProps) => {
    const {t} = useTranslation();
    const {
        className,
        label,
        options,
        value,
        onChange,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange?.(e.target.value);
        }
    }

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const mods: Mods = {}

    return (
        <div
            className={classNames(cls.Wrapper, mods, [className])}
        >
            {label &&
                <span className={cls.label}>{t(label)}</span>
            }
            <select className={cls.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
});