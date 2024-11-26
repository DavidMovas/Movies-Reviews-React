import { classNames } from "../../lib/classNames/classNames";
import React from "react";
import { ReactNode } from "react";
import * as cls from "./Modal.module.css";


interface ModelProps {
    className?: string;
    children?: ReactNode;
}

export const Modal = (props: ModelProps) => {
    const {className, children} = props;

    return (
        <div className={classNames(cls.Module, {}, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}