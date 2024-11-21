import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("navbar");

    return (
        <div className={classNames('navbar', {}, [className])}>
            <div className="links">
                <AppLink to={'/'} className={'main-link'} theme={AppLinkTheme.SECONDARY}>{t('Main')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
