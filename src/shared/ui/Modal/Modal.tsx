import { classNames } from "../../lib/classNames/classNames";
import React, { ReactNode, useRef, useState } from "react";
import * as cls from './Modal.module.css';


interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_CLOSING_DILAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_CLOSING_DILAY);
        }
    }

    const onContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: (isOpen ?? true),
        [cls.isClosing]: (isClosing ?? true)
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    )
}