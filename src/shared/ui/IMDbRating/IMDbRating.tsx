import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import IMDbIcon from "shared/assets/icons/IMDB_Logo_2016.svg";
import { IconLink } from "shared/ui/IconLink/IconLink";
import * as cls from "./IMDbRating.module.css"
import { formatFloat } from "shared/lib/float/formatFloat";

interface IMDbRatingProps {
    className?: string;
    value?: number;
    url?: string;
}

export const IMDbRating = (props: IMDbRatingProps) => {
    const {
        className,
        value,
        url,
    } = props;

    let content;

    if (value && value > 1) {
        content = (
            <div className={cls.value}>{formatFloat(value)}/10</div>
        )
    }

    return (
        <div
            className={classNames(cls.IMDbRating, {}, [className])}
        >
            {content}
            <IconLink className={cls.imdbUrl} Svg={IMDbIcon} url={url}/>
        </div>
    );
}