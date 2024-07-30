import React, { createContext,useState } from 'react'


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [darkTheme,setDarkTheme] = useState(true);

    function toggleTheme (){
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
  
  return (
    <ThemeContext.Provider value={{darkTheme,toggleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;