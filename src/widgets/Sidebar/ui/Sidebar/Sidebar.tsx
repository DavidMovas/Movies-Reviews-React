import { classNames } from "shared/lib/classNames/classNames";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import * as cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);


    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button theme={ThemeButton.PRIMARY} onClick={onToggle}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};