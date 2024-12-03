import React, { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./ProfilePage.module.css"
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "enteties/Profile";

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
const ProfilePage = memo(({className}: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div
                className={classNames(cls.ProfilePage, {}, [className])}
            >
                <h1>{t('Profile')}</h1>
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;