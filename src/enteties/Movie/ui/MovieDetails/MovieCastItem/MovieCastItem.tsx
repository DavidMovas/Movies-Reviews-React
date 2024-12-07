import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./MovieCastItem.module.css"
import { Cast } from "enteties/Star";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";

interface MovieCastItemProps {
    className?: string;
    person?: Cast;
}

export const MovieCastItem = ({className, person}: MovieCastItemProps) => {
    return (
        <div className={classNames(cls.MovieCastItem, {}, [className])}>
            {person?.star.avatarUrl && <Avatar className={cls.avatar} src={person?.star.avatarUrl} width={100} height={130} alt={"Cast"}/>}
            <div className={cls.texts}>
                <Text
                    text={namesToDefault([person?.star.firstName, person?.star.middleName,  person?.star.lastName])}
                    theme={TextTheme.INVERTED}
                    size={TextSize.SMALL_S}
                />

                {person?.role &&
                    <Text
                        text={namesToDefault([person?.role])}
                        theme={TextTheme.INVERTED}
                        size={TextSize.SMALL_S}
                    />
                }

                {person?.heroName &&
                    <Text
                        text={namesToDefault([person?.heroName])}
                        theme={TextTheme.INVERTED}
                        size={TextSize.SMALL_S}
                    />
                }
            </div>
        </div>
    );
}

function namesToDefault(names: (string | undefined)[]): string {
    let result = "";

    names.forEach((name) => {
        if (name) {
            result += `${name} `;
        }
    });

    return result;
}