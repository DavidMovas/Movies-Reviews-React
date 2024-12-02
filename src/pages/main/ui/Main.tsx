import React from 'react';
import { useTranslation } from "react-i18next";
import { Counter } from "enteties/Counter";

function Main() {
    const {t} = useTranslation();

    return (
        <div>
            <h1>{t('Main')}</h1>
            <Counter></Counter>
        </div>
    );
}

export default Main;