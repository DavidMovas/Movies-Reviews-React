import React, { useCallback } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "enteties/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import * as cls from "./ProfilePageHeader.module.css"

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch])

    return (
        <div
            className={classNames(cls.ProfilePageHeader, {}, [className])}
        >
            <Text title={t("Profile")}></Text>
            {readonly ?
                (
                    <Button className={cls.editBtn} onClick={onEdit} theme={ButtonTheme.PRIMARY}>{t("Edit")}</Button>
                )
                :
                (
                    <div className={cls.editBtn}>
                        <Button className={cls.saveBtn} onClick={onSave} theme={ButtonTheme.PRIMARY}>{t("Save")}</Button>
                        <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE}>{t("Cancel")}</Button>
                    </div>
                )
            }

        </div>
    );
}