import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { ContentPanel } from "shared/ui/ContentPanel/ContentPanel";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import * as cls from "./MovieReviewPanel.module.css"
import { MovieReviewItem } from "enteties/Movie/ui/MovieDetails/MovieReviewItem/MovieReviewItem";
import { Review } from "enteties/Review";
import { formatDateString } from "shared/lib/date/formatDateString";

interface MovieReviewPanelProps {
    className?: string;
    movieId: string;
}

export const MovieReviewPanel = (props: MovieReviewPanelProps) => {
    const {t} = useTranslation("movie_reviews")

    const {
        className,
        movieId
    } = props;

    const testReview: Review = {
        id: 1,
        userId: 21,
        movieId: 501,
        title: "Title to great movie",
        description: "Great movie ! I like this movie !",
        rating: 8,
        createdAt: formatDateString("2015-01-01"),
    }

    // make here fetching all reviews by movie ID

    return (
        <div
            className={classNames(cls.MovieReviewPanel, {}, [className])}
        >
            <ContentPanel>
                <Text className={cls.title} title={t("Reviews")} size={TextSize.SMALL}/>
                <MovieReviewItem review={testReview}/>
            </ContentPanel>
        </div>
    );
}