import React from 'react';
import { useTranslation } from "react-i18next";

function Main() {
    const {t} = useTranslation();

    return (
        <div>
            <h1>{t('Main')}</h1>
        </div>
    );
}

export default Main;