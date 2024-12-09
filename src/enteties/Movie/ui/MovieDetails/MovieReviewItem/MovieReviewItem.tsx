import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./MovieReviewItem.module.css"
import { Review } from "enteties/Review";
import { ContentPanel } from "shared/ui/ContentPanel/ContentPanel";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Rating } from "shared/ui/Rating/Rating";

interface MovieReviewItemProps {
    className?: string;
    review: Review;
}

export const MovieReviewItem = (props: MovieReviewItemProps) => {
    const {
        className,
        review
    } = props;

    return (
        <div
            className={classNames(cls.MovieReviewItem, {}, [className])}
        >
            <ContentPanel>
                <div className={cls.header}>
                    <Text title={review.title} theme={TextTheme.INVERTED} size={TextSize.SMALL}/>
                    <Rating value={review.rating} theme={TextTheme.INVERTED}/>
                </div>
            </ContentPanel>
        </div>
    );
}