import React from 'react';
import { Cast } from "enteties/Star";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { ContentPanel } from "shared/ui/ContentPanel/ContentPanel";
import { useTranslation } from "react-i18next";
import * as cls from "./MovieCastPanel.module.css"
import { classNames } from "shared/lib/classNames/classNames";
import { MovieCastItem } from "enteties/Movie/ui/MovieDetails/MovieCastItem/MovieCastItem";

interface MovieCastPanelProps {
    className?: string;
    cast?: Cast[];
}

export const MovieCastPanel = (props: MovieCastPanelProps) => {
    const {t} = useTranslation("movie_details_crew");

    const {
        className,
        cast,
    } = props;

    if (!cast) {
        return null;
    }

    const filteredCast = toSortedCastByAvatar([...cast]);

    const directorsList = Object.values(filteredCast).filter((person) => person.role === "director").map((person) => {
        return (
            <MovieCastItem key={person.star.id} person={person}/>
        )
    });

    const producersList  = Object.values(filteredCast).filter((person) => person.role === "producer").map((person) => {
        return (
            <MovieCastItem key={person.star.id} person={person}/>
        )
    });

    const writesList = Object.values(filteredCast).filter((person) => person.role === "writer").map((person) => {
        return (
            <MovieCastItem key={person.star.id} person={person}/>
        )
    });

    const composersList = Object.values(filteredCast).filter((person) => person.role === "composer").map((person) => {
        return (
            <MovieCastItem key={person.star.id} person={person}/>
        )
    });

    const actorsList = Object.values(filteredCast).filter((person) => person.role === "actor").map((person) => {
        return (
            <MovieCastItem key={person.star.id} person={person}/>
        )
    });

    return (
        <ContentPanel className={classNames(cls.MovieCastPanel, {}, [className])}>
            <div className={cls.block}>
                <Text className={cls.label} title={t("Crew")} size={TextSize.SMALL}/>
                <div className={cls.castLists}>
                    {directorsList &&
                        <div className={cls.castGroup}>
                            <Text className={cls.crewLabel} text={t("Directors")} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                            <div className={cls.cast}>{directorsList}</div>
                        </div>
                    }
                    {producersList &&
                        <div className={cls.castGroup}>
                            <Text className={cls.crewLabel} text={t("Producers")} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                            <div className={cls.cast}>{producersList}</div>
                        </div>
                    }
                    {writesList &&
                        <div className={cls.castGroup}>
                            <Text className={cls.crewLabel} text={t("Writers")} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                            <div className={cls.cast}>{writesList}</div>
                        </div>
                    }
                    {composersList &&
                        <div className={cls.castGroup}>
                            <Text className={cls.crewLabel} text={t("Composers")} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                            <div className={cls.cast}>{composersList}</div>
                        </div>
                    }
                    {actorsList &&
                        <div className={cls.castGroup}>
                            <Text className={cls.crewLabel} text={t("Actors")} size={TextSize.SMALL} theme={TextTheme.INVERTED}/>
                            <div className={cls.cast}>{actorsList}</div>
                        </div>
                    }
                </div>
            </div>
        </ContentPanel>
    );
}

function toSortedCastByAvatar(cast: Cast[]): Cast[] {
    return cast.sort((a, b) => {
        const aHasAvatar = a.star.avatarUrl ? 1 : 0;
        const bHasAvatar = b.star.avatarUrl ? 1 : 0;

        return bHasAvatar - aHasAvatar;
    });
}