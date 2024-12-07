import React from 'react';
import { Rating } from "shared/ui/Rating/Rating";
import { Metascore } from "shared/ui/Metascore/Metascore";
import { classNames } from "shared/lib/classNames/classNames";
import { IMDbRating } from "shared/ui/IMDbRating/IMDbRating";
import * as cls from "./MovieRatingInfo.module.css"

interface MovieRatingInfoProps {
    className?: string;
    avgRating?: number;
    imdbRating?: number;
    imdbUrl?: string;
    metascore?: number;
    metascoreUrl?: string;
}

export const MovieRatingInfo = (props: MovieRatingInfoProps) => {
    const {
        className,
        avgRating,
        imdbRating,
        imdbUrl,
        metascore,
        metascoreUrl,
    } = props;

    return (
        <div className={classNames(cls.MovieRatingInfo, {}, [className])}>
            <Rating className={cls.item} value={avgRating}/>
            <Metascore className={cls.item} value={metascore} url={metascoreUrl}/>
            <IMDbRating className={cls.item} value={imdbRating} url={imdbUrl}/>
        </div>
    );
}