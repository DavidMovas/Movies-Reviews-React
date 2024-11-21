import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React from "react";
import * as cls from './NotFoundPage.module.css';


interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
}