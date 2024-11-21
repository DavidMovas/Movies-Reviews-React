import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Loader.module.css";
import React from "react";

interface LoaderProps {
    className?: string;
}

export const Loader = ({className}: LoaderProps) => (
    <div className={classNames(cls.loader, {}, [className])}>
        <span />
    </div>
);