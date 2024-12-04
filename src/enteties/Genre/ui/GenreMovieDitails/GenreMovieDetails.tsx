import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./GenreMovieDetails.module.css"

interface GenreMovieDetailsProps {
    className?: string;
}

export const GenreMovieDetails = (props: GenreMovieDetailsProps) => {
    const {
        className
    } = props;

    return (
        <div
            className={classNames(cls.GenreMovieDetails, {}, [className])}
        >

        </div>
    );
}