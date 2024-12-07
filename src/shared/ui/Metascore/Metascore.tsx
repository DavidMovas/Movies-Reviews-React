import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Metascore.module.css"
import { useTranslation } from "react-i18next";

interface MetascoreProps {
    className?: string;
    value?: number;
    url?: string;
}

// eslint-disable-next-line react/display-name
export const Metascore = memo(({className, value, url}: MetascoreProps) => {
    const {t} = useTranslation('movie_details');

    const styles = {
        display: "flex",
        justifyContent: "center",
        backgroundColor: getMetascoreTheme(value),
        alignItems: "center",
        width: "30px",
        height: "30px",
        color: "white",
        borderRadius: "4px",
    };

    return (
        <div
            className={classNames(cls.Metascore, {}, [className])}
        >
            <div style={styles}>{value}</div>
            <a href={url ??  "_blank"}>{t("Metascore")}</a>
        </div>
    );
});

function getMetascoreTheme(value: number | undefined): string{
    if( value === undefined) {
        return "#464646";
    } else if (value < 30) {
        return "#cb0000";
    } else if (value < 60) {
        return "#ff8000";
    } else {
        return "#00a300";
    }
}