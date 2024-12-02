import React, { memo, useCallback } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import * as cls from "./LoginForm.module.css";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByEmail } from "../../model/services/loginByEmail/loginByEmail";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { Text, TextTheme } from "shared/ui/Text/Text";


interface LoginFormProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({className}: LoginFormProps) => {
   const {t} = useTranslation();

   const dispatch = useDispatch<AppDispatch>();
   const {email, password, isLoading, error} = useSelector(getLoginState)

   const onChangeEmail = useCallback((value: string) => {
       dispatch(loginActions.setEmail(value))
   }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByEmail({email, password}));
    }, [dispatch, email, password])

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t('Login form')}></Text>
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                value={email}
                className={cls.input}
                onChange={onChangeEmail}
                placeholder={t('Email')}
            />
            <Input
                type="text"
                value={password}
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Password')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
