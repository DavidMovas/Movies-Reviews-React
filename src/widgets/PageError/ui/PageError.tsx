import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import React from 'react';
import * as cls from './PageError.module.css';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button
                onClick={reloadPage}
                className={cls.reloadButton}
            >
                {t('Refresh page')}
            </Button>
        </div>
    );
}