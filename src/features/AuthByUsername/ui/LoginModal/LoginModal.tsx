import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {className, isOpen, onClose} = props;

    return (
        <Modal
            className={classNames('modal', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
}