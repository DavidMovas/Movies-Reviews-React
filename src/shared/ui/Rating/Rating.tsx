import React, { memo } from 'react';
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Icon } from "shared/ui/Icon/Icon";
import StarIcon from "shared/assets/icons/star-svgrepo-com.svg"
import { formatFloat } from "shared/lib/float/formatFloat";
import * as cls from "./Rating.module.css"
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";

export enum RatingTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED = 'inverted',
}

interface RatingProps {
    className?: string;
    value?: number;
    theme?: TextTheme;
}

// eslint-disable-next-line react/display-name
export const Rating = memo((props: RatingProps) => {
    const {
        className,
        value,
        theme = TextTheme.PRIMARY,
    } = props;

    const mods: Mods = {
        [cls.theme]: theme,
    }

    return (
        <div className={classNames(cls.Rating, mods, [className])}>
            <Text text={formatFloat(value).toString() + "/10"} size={TextSize.SMALL} theme={theme}/>
            <Icon Svg={StarIcon}/>
        </div>
    );
});