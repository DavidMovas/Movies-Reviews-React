import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./PageLoader.module.css";
import React from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);


