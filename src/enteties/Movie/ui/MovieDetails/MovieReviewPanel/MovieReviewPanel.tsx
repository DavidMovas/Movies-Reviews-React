import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { ContentPanel } from "shared/ui/ContentPanel/ContentPanel";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { MovieReviewItem } from "enteties/Movie/ui/MovieDetails/MovieReviewItem/MovieReviewItem";
import { Review } from "enteties/Review";
import { formatDateString } from "shared/lib/date/formatDateString";
import * as cls from "./MovieReviewPanel.module.css"

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
        description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg. A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg. A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
        rating: 8,
        createdAt: formatDateString("2015-01-01"),
    }

    // make here fetching all reviews by movie ID

    return (
        <div className={classNames(cls.MovieReviewPanel, {}, [className])}>
            <ContentPanel className={cls.block}>
                <Text className={cls.title} title={t("Reviews")} size={TextSize.SMALL}/>
                <div className={cls.reviews}>
                    <MovieReviewItem review={testReview}/>
                </div>
            </ContentPanel>
        </div>
    );
}