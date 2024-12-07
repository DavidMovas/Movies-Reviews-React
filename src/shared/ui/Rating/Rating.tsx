import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Rating.module.css"
import { Icon } from "shared/ui/Icon/Icon";
import StarIcon from "shared/assets/icons/star-svgrepo-com.svg"

export enum RatingTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface RatingProps {
    className?: string;
    value?: number;
    size?: number;
    theme?: RatingTheme;
}

export const Rating = (props: RatingProps) => {
    const {
        className,
        value,
        size = 24,
        theme = RatingTheme.PRIMARY,
    } = props;


    return (
        <div className={classNames(cls.Rating, {[cls.theme]: theme}, [className])}>
            <div className={cls.value}>{value ?? 0}/10</div>
            <Icon Svg={StarIcon}/>
        </div>
    );
}