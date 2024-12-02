import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import * as cls from "./LoginForm.module.css";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";


interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
   const {t} = useTranslation();


    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input type="text" className={cls.input}/>
            <Input type="text" className={cls.input}/>
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
}
