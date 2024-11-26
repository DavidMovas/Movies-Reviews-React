import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";
import React, { FC, useMemo } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children?: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
   const {
       initialTheme,
       children
   } = props;

    const [theme, setTheme] = React.useState<Theme>(defaultTheme || initialTheme);

    const defaultProps =  useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;