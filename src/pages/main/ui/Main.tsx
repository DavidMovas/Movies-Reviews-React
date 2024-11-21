import React from 'react';
import { useTranslation } from "react-i18next";

function Main() {
    const {t} = useTranslation();

    return (
        <h1>{t('Main')}</h1>
    );
}

export default Main;