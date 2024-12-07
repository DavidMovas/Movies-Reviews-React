import React, { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from "shared/lib/classNames/classNames";
import * as cls from "./Avatar.module.css"

interface AvatarProps {
    className?: string;
    src?: string;
    width?: number | string;
    height?: number | string;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        width,
        height,
        alt = "User Avatar"
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: width ?? 100,
            height: height ?? 100,
        }
    }, [])

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
}