import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import React, { FC, memo } from "react";
import * as cls from './AppLink.module.css';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

// eslint-disable-next-line react/display-name
export const AppLink:FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, (theme === AppLinkTheme.SECONDARY ? cls.secondary : cls.primary)])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});