import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames('navbar', {}, [className])}>
            <ThemeSwitcher />
            <div className="links">
                <AppLink to={'/'} className={'mainLink'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};
