import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./MovieDetailsPage.module.css"
import { useTranslation } from "react-i18next";
import { MovieDetailsItem } from "enteties/Movie";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";

interface MovieDetailsPageProps {
    className?: string;
}

const MovieDetailsPage = (props: MovieDetailsPageProps) => {
    const {t} = useTranslation('movie_details');
    const {
        className
    } = props;

    const {id} = useParams<{id: string}>();

    if (!id) {
        return (
            <div
                className={classNames(cls.MovieDetailsPage, {}, [className])}
            >
                <Text text={t("Movie not found")}/>
            </div>
        )
    }

    return (
        <div
            className={classNames(cls.MovieDetailsPage, {}, [className])}
        >
            <MovieDetailsItem movieId={id}/>
        </div>
    );
}

export default memo(MovieDetailsPage);