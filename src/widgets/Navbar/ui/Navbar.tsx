import React, { memo, useCallback, useState } from 'react';
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, userActions } from "enteties/User";
import * as cls from './Navbar.module.css';

interface NavbarProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation("navbar");

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserData);
    const dispatch = useDispatch<AppDispatch>();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);


    if (authData.access_token) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Sing out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('Sing in')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            >
            </LoginModal>
        </div>
    );
});
