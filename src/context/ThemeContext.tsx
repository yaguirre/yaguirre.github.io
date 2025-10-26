import React, { createContext, useContext, useEffect } from 'react';

type ThemeContextType = {
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Always use dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      {children}
    </ThemeContext.Provider>
  );
};