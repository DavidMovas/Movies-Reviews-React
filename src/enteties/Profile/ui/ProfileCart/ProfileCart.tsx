import React from 'react';
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "enteties/Profile";
import { Loader } from "shared/ui/Loader/Loader";
import * as cls from "./ProfileCart.module.css"
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";

interface ProfileCartProps {
    className?: string;
    data?: Profile
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeUsername: (value?: string) => void;
    onChangeBio: (value?: string) => void;
    onChangeAvatarUrl: (value?: string) => void;
}

export const ProfileCart = (props: ProfileCartProps) => {
    const {t} = useTranslation('profile');

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeUsername,
        onChangeBio,
        onChangeAvatarUrl,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCart, {}, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCart, {}, [className, cls.error])}>
                <Text title={t("Error")}  text={t("Ops, please try reload page later")} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <div
            className={classNames(cls.ProfileCart, mods, [className])}
        >
            <div className={cls.data}>
                {data?.avatarUrl && <div className={cls.avatarWrapper}>
                    <Avatar src={data.avatarUrl} size={150}></Avatar>
                </div>}
                <Select
                    value={data?.avatarUrl}
                    disabled={readonly}
                    options={[
                        { content: "Standard", value: "https://gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },
                        { content: "Young man with glasses", value: "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175928.jpg?t=st=1733292327~exp=1733295927~hmac=1728daca2e1616de6202c8d49592e04c19c769ae5af39fd99af8e4db1c3e026f&w=900" },
                        { content: "Smiling blonde boy hoodie", value: "https://img.freepik.com/free-vector/smiling-blonde-boy-hoodie_1308-174731.jpg?t=st=1733292325~exp=1733295925~hmac=8a4c75767781c9190936ff8b4a6f2f6114ca6ea30ad11fac5e3cfe58640f4623&w=900" },
                        { content: "Smiling red haired boy", value: "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-175803.jpg?t=st=1733292316~exp=1733295916~hmac=4b43c05e6a68e26df2a2abdb7c5392844b816bf3226142a3ea5c4887cf913105&w=826" },
                    ]}
                    onChange={onChangeAvatarUrl}
                />
                <Input
                    value={data?.username ?? ""}
                    placeholder={t("Username")}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.bio ?? ""}
                    placeholder={t("Bio")}
                    onChange={onChangeBio}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
}