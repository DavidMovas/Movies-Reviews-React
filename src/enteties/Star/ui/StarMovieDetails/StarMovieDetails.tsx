import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./StarMovieDetails.module.css"

interface StarMovieDetailsProps {
    className?: string;
}

export const StarMovieDetails = (props: StarMovieDetailsProps) => {
    const {
        className
    } = props;

    return (
        <div
            className={classNames(cls.StarMovieDetails, {}, [className])}
        >

        </div>
    );
}