import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import * as cls from './Sidebar.module.css';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainPageIcon from "shared/assets/icons/home-svgrepo-com.svg";
import AboutPageIcon from "shared/assets/icons/about-us-svgrepo-com.svg";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation('navbar');


    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                square={true}
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink
                        className={cls.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <MainPageIcon className={cls.icon}/>
                        <span className={cls.link}>{t('Main')}</span>
                    </AppLink>
                </div>
                <div>
                    <AppLink
                        className={cls.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                    >
                        <AboutPageIcon className={cls.icon}/>
                        <span className={cls.link}>{t('About')}</span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};