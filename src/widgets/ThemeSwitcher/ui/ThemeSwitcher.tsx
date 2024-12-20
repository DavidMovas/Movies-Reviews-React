import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import React, { memo } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('themeSwitcher', {}, [className])}
            onClick={toggleTheme }
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );

});