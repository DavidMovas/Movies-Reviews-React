import React, { SVGProps } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./IconLink.module.css"

interface IconLinkProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGViewElement>> | React.FC<SVGProps<SVGSVGElement>> ;
    url?: string;
}

export const IconLink = ({className, Svg, url}: IconLinkProps) => {
    const clickHandler = () => {
        window.open(url, '_blank');
    }

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            onClick={clickHandler}
        />
    )
}