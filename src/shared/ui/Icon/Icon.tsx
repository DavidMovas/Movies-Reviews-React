import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Icon.module.css"

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGViewElement>>;
}

export const Icon = ({className, Svg}: IconProps) => {

    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
}