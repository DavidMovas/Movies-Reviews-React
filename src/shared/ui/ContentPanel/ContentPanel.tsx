import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./ContentPanel.module.css"

interface ContentPanelProps {
    className?: string;
    children?: React.ReactNode;
}

export const ContentPanel = (props: ContentPanelProps) => {
    const {
        className,
        children
    } = props;


    return (
        <div className={classNames(cls.ContentPanel, {}, [className])}>
            {children}
        </div>
    );
}