import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Sidebar.module.css"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

// eslint-disable-next-line react/display-name
export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    const { t } = useTranslation('navbar');
  
    return (
        <AppLink
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
})