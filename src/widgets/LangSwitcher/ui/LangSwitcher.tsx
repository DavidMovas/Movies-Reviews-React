import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import React, { memo } from "react";
import  * as cls from "./LangSwitcher.module.css";

interface LangSwitcherProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const LangSwitcher = memo(({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {t('Language')}
        </Button>
    );
});