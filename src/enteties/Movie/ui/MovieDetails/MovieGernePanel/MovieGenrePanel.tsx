import React from 'react';
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { ContentPanel } from "shared/ui/ContentPanel/ContentPanel";
import { Genre } from "enteties/Genre";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./MovieGenrePanel.module.css"

interface MovieGenrePanelProps {
    className?: string;
    genres?: Genre[];
}

export const MovieGenrePanel = (props: MovieGenrePanelProps) => {
    const {t } = useTranslation('movie_genre');

    const {
        className,
        genres
    } = props;

    return (
        <ContentPanel className={classNames(cls.MovieGenrePanel, {}, [className])}>
            <div className={cls.block}>
                <Text className={cls.lable} title={t("Genres")} size={TextSize.SMALL}/>
                <div className={cls.genres}>
                    {genres && Object.values(genres).map((genre) => {
                        return(
                            <Text key={genre.id} text={t(genre.name)} theme={TextTheme.INVERTED} size={TextSize.SMALL}/>
                        )
                    })}
                </div>
            </div>
        </ContentPanel>
    );
}