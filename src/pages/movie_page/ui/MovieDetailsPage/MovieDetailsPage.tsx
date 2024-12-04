import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./MovieDetailsPage.module.css"
import { useTranslation } from "react-i18next";

interface MovieDetailsPageProps {
    className?: string;
}

const MovieDetailsPage = (props: MovieDetailsPageProps) => {
    const {t} = useTranslation('movie_details');
    const {
        className
    } = props;

    return (
        <div
            className={classNames(cls.MovieDetailsPage, {}, [className])}
        >

        </div>
    );
}

export default memo(MovieDetailsPage);