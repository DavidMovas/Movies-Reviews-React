import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./MoviesPage.module.css"
import { useTranslation } from "react-i18next";

interface MoviesPageProps {
    className?: string;
}

const MoviesPage = (props: MoviesPageProps) => {
    const {t} = useTranslation('movies_page');
    const {
        className
    } = props;


    return (
        <div
            className={classNames(cls.MoviesPage, {}, [className])}
        >

        </div>
    );
}

export default memo(MoviesPage);