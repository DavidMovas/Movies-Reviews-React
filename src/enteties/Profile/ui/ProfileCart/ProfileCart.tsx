import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "enteties/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "enteties/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "enteties/Profile/model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import * as cls from "./ProfileCart.module.css"
import { Input } from "shared/ui/Input/Input";
import { getUserData } from "enteties/User";

interface ProfileCartProps {
    className?: string;
}

export const ProfileCart = ({className}: ProfileCartProps) => {
    const {t} = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoafing = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);


    return (
        <div
            className={classNames(cls.ProfileCart, {}, [className])}
        >
            <div className={cls.header}>
                <Text title={t("Profile")}></Text>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.username}
                    placeholder={t("Username")}
                />
                <Input
                    value={data?.bio}
                    placeholder={t("Bio")}
                />
            </div>
            <div className={cls.actions}>
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t("Edit")}</Button>
            </div>
        </div>
    );
}