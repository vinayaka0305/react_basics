import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

// console.log(ThemeContext);

const ThemeProvide = ({children}) => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{dark,toggle}}>
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvide;
