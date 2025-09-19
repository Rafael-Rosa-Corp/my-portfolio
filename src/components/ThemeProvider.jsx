
import {useState, useEffect, createContext} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";    



export const ThemeContext = createContext();        


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme);



    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
        }
    }, []);


    const toggleTheme = () => {
        const newTheme = theme === darkTheme ? lightTheme : darkTheme;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
    }


        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <StyledThemeProvider theme={theme}>
                    {children}
                </StyledThemeProvider>
            </ThemeContext.Provider>
        );
    }