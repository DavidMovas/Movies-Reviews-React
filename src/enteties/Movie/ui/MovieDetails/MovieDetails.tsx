import React, { memo, useEffect } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { moviesReducer } from "../../model/slices/movieDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchMovieById, ResponseError } from "enteties/Movie/model/services/fetchMovieById/fetchMovieById";
import {
    getMovieDetailsData,
    getMovieDetailsError,
    getMovieDetailsIsLoading,
} from "../../model/selectors/getMovieDetails";
import { useSelector } from "react-redux";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { formatDateString } from "shared/lib/date/formatDateString";
import { ContentPanel } from "shared/ui/ContentPanel/ContentPanel";
import * as cls from "./MovieDetails.module.css"
import { MovieRatingInfo } from "enteties/Movie/ui/MovieDetails/MovieRatingInfo/MovieRatingInfo";
import { MovieGenrePanel } from "enteties/Movie/ui/MovieDetails/MovieGernePanel/MovieGenrePanel";

interface MovieDetailsProps {
    className?: string;
    movieId: string;
}

const reducers: ReducersList = {
    movies: moviesReducer,
}

// eslint-disable-next-line react/display-name
export const MovieDetails = memo((props: MovieDetailsProps) => {
    const {t} = useTranslation('movie_details');

    const {
        className,
        movieId,
    } = props;

    const isLoading = useSelector(getMovieDetailsIsLoading);
    const error = useSelector(getMovieDetailsError);
    const data = useSelector(getMovieDetailsData);

    const dispatch = useAppDispatch();

    const FetchMovieError = {
        [ResponseError.SERVER_ERROR]: t("Server error"),
        [ResponseError.INCORRECT_DATA]: t("Incorrect data"),
        [ResponseError.NOT_FOUND]: t("Not found"),
    }

    let content;

    useEffect(() => {
        dispatch(fetchMovieById(movieId))
    }, [dispatch, movieId])

    if(isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={250} height={250} border={"50%"} />
                <Skeleton className={cls.title} width={350} height={32} />
                <Skeleton className={cls.skeleton} width="100%" height={170} />
                <Skeleton className={cls.skeleton} width="100%" height={170} />
                <Skeleton className={cls.skeleton} width="100%" height={170} />
            </div>
        )
    }  else if (error) {
        content = (
            <Text text={FetchMovieError[error]} theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
        )
    } else  {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        className={cls.avatar}
                        src={data?.posterUrl ?? "https://www.svgrepo.com/show/530128/movie.svg"}
                        height={400} width={300}
                    />
                </div>
                <div className={cls.header}>
                    <Text className={cls.title} title={data?.title} size={TextSize.LARGE}/>
                    <MovieRatingInfo
                        className={cls.ratingInfo}
                        avgRating={data?.avgRating}
                        imdbRating={data?.imdbRating}
                        imdbUrl={data?.imdbUrl}
                        metascore={data?.metascore}
                        metascoreUrl={data?.metascoreUrl}
                    />
                </div>

                <div className={cls.panels}>
                    <MovieGenrePanel className={cls.panel} genres={data?.genres} />
                    <ContentPanel  className={cls.panel}>
                        <div className={cls.blockInfo}>
                            <Text className={cls.lable} title={t("Release date")} size={TextSize.SMALL}/>
                            <Text className={cls.text} text={formatDateString(data?.releaseDate)} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                        </div>
                    </ContentPanel>

                    <ContentPanel className={cls.panel}>
                        <div className={cls.blockInfo}>
                            <Text className={cls.lable} title={t("Description")} size={TextSize.SMALL}/>
                            <Text className={cls.text} text={data?.description} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                        </div>
                    </ContentPanel>
                </div>
            </>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div
                className={classNames(cls.MovieDetails, {}, [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    );
});