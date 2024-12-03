import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import React, { FC, memo } from "react";
import './AppLink.module.scss';

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
            className={classNames('appLink', {}, [className, (theme === AppLinkTheme.SECONDARY ? 'secondary' : 'primary')])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});