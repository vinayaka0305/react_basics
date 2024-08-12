import React, { createContext, useState } from "react";

export const ThemeContextProvid = createContext();

const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return <ThemeContextProvid.Provider value={{isDark,setIsDark}}>
    {children}
    </ThemeContextProvid.Provider>;
};

export default ThemeContext;
