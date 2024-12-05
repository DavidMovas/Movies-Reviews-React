import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileForm,
    getProfileReadonly,
    profileActions,
    ProfileCart,
    profileReducer, ValidateProfileError
} from "enteties/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileIsLoading } from "enteties/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "enteties/Profile/model/selectors/getProfileError/getProfileError";
import * as cls from "./ProfilePage.module.css"
import { ProfilePageHeader } from "pages/profile_page/ui/ProfilePageHeader/ProfilePageHeader";
import {
    getProfileValidationErrors
} from "enteties/Profile/model/selectors/getProdileValidationErrors/getProdileValidationErrors";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
const ProfilePage = memo(({className}: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoafing = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const validateErrorTranslation = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_DATA]: t('Invalid user data'),
        [ValidateProfileError.NOT_FOUND]: t('User not found'),
        [ValidateProfileError.EMPTY_USERNAME]: t('Username cannot be empty'),
        [ValidateProfileError.USERNAME_LESS_THAN_MIN]: t('Username is to short'),
        [ValidateProfileError.USERNAME_MORE_THAN_MAX]: t('Username is to long'),
        [ValidateProfileError.EMPTY_EMAIL]: t('Email cannot be empty'),
        [ValidateProfileError.INCORRECT_EMAIL]: t('Email is not valid'),
        [ValidateProfileError.EMPTY_BIO]: t('Bio cannot be empty'),
        [ValidateProfileError.BIO_MORE_THAN_MAX]: t('Bio contains more than 2000 characters'),
    }

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value}))
    }, [dispatch]);

    const onChangeBio = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({bio: value}))
    }, [dispatch]);

    const onChangeAvatarUrl = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatarUrl: value}))
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div
                className={classNames(cls.ProfilePage, {}, [className])}
            >
                <ProfilePageHeader />
                {validationErrors?.length && validationErrors.map(err => {
                    return (
                        <Text key={err} text={validateErrorTranslation[err]} theme={TextTheme.ERROR}></Text>
                    )
                })}
                <ProfileCart
                    data={formData}
                    isLoading={isLoafing}
                    error={error}
                    readonly={readonly}
                    onChangeUsername={onChangeUsername}
                    onChangeBio={onChangeBio}
                    onChangeAvatarUrl={onChangeAvatarUrl}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;