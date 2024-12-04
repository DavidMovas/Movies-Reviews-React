import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileForm,
    getProfileReadonly,
    profileActions,
    ProfileCart,
    profileReducer
} from "enteties/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileIsLoading } from "enteties/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "enteties/Profile/model/selectors/getProfileError/getProfileError";
import * as cls from "./ProfilePage.module.css"
import { ProfilePageHeader } from "pages/profile_page/ui/ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
const ProfilePage = memo(({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoafing = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly =useSelector(getProfileReadonly);


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