import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

 const ThemeProvider = ({children}) => {

    
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem('theme') === 'dark'
      );
    
      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setIsDarkTheme(savedTheme === 'dark');
        }
      }, []);

      const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('theme', newTheme);
      };


      const themeInfo = {isDarkTheme, toggleTheme}

      return (
        <ThemeContext.Provider value={themeInfo}>
          {children}
        </ThemeContext.Provider>
      )
};

export default ThemeProvider;