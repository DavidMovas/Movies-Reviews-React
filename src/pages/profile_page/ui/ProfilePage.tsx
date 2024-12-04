import React, { memo, useEffect } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, ProfileCart, profileReducer } from "enteties/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import * as cls from "./ProfilePage.module.css"
import { getUserData } from "enteties/User";

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
const ProfilePage = memo(({className}: ProfilePageProps) => {
    const data = useSelector(getUserData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData({username: data.user?.username ?? ""}));
    }, [dispatch, data]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div
                className={classNames(cls.ProfilePage, {}, [className])}
            >
                <ProfileCart />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;