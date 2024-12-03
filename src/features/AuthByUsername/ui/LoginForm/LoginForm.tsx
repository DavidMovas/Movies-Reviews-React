import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector, useStore } from "react-redux";
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { loginByEmail, LoginError } from "../../model/services/loginByEmail/loginByEmail";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { getLoginUserEmail } from "enteties/User/model/selectors/getLoginUserEmail/getLoginUserEmail";
import { getLoginUserPassword } from "enteties/User/model/selectors/getLoginUserPassword/getLoginUserPassword";
import { getLoginUserError } from "enteties/User/model/selectors/getLoginUserError/getLoginUserError";
import { getLogingUserIsLoading } from "enteties/User/model/selectors/getLoginUserIsLoading/getLogingUserIsLoading";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import * as cls from "./LoginForm.module.css";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

// eslint-disable-next-line react/display-name
const LoginForm = memo((props: LoginFormProps) => {
   const {className, onSuccess} = props

    const {t} = useTranslation();

   const dispatch = useAppDispatch();
   const store = useStore() as ReduxStoreWithManager;
   const email = useSelector(getLoginUserEmail);
   const password = useSelector(getLoginUserPassword);
   const error = useSelector(getLoginUserError);
   const isLoading = useSelector(getLogingUserIsLoading);

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);

        return () => {
            store.reducerManager.remove('loginForm');
        }
    }, []);

   const onChangeEmail = useCallback((value: string) => {
       dispatch(loginActions.setEmail(value))
   }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByEmail({email, password}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, email, password])

    return (
        <DynamicModuleLoader key={'loginForm'} reducers={initialReducers} removeAfterUnmount={true}>
            <div
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text title={t('Login form')}></Text>
                {error == LoginError.INCORRECT_DATA &&
                    <Text text={t('You entered wrong email or password')} theme={TextTheme.ERROR}/>}
                {error == LoginError.NOT_FOUND &&
                    <Text text={t('User not found')} theme={TextTheme.ERROR}/>}
                {error == LoginError.SERVER_ERROR &&
                    <Text text={t('Server error, please try later')} theme={TextTheme.ERROR}/>}
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;