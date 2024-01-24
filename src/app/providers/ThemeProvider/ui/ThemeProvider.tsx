import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from "../lib/ThemeContext";
import { FC, useMemo, useState } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
// Получаем тему из localStorage 
// Преобразовали ее к типу Theme с помощью as Theme 
// Если localStorege пустой то по умолчанию ставим тему Theme.LIGHT
// Потом эту константу передаем в состояние 

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider