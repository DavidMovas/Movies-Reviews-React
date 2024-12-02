import React from 'react';
import { useTranslation } from "react-i18next";
import { Counter } from "enteties/Counter";

function About() {
    const {t} = useTranslation('about');

    return (
        <div>
            <h1>{t('About')}</h1>
            <Counter></Counter>
        </div>
    );
}

export default About;