import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Rating.module.css"
import { Icon } from "shared/ui/Icon/Icon";
import StarIcon from "shared/assets/icons/star-svgrepo-com.svg"
import { formatFloat } from "shared/lib/float/formatFloat";

export enum RatingTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface RatingProps {
    className?: string;
    value?: number;
    theme?: RatingTheme;
}

// eslint-disable-next-line react/display-name
export const Rating = memo((props: RatingProps) => {
    const {
        className,
        value,
        theme = RatingTheme.PRIMARY,
    } = props;


    return (
        <div className={classNames(cls.Rating, {[cls.theme]: theme}, [className])}>
            <div className={cls.value}>{formatFloat(value)}/10</div>
            <Icon Svg={StarIcon}/>
        </div>
    );
});