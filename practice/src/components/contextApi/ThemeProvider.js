import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const name = 'vinayaka'
    const[dark,setDark] = useState(false);

    const toggle = ()=>{
        setDark((prev)=>!prev)
    }

    const cssStyle = {
        backgroundColor:dark?'#333':'#fff',
        color:dark?'#fff':"#333"
    }



  return (
   <>
    <ThemeContext.Provider value={{name,dark,toggle,cssStyle}}>
            {children}
    </ThemeContext.Provider>
   </>
  )
}

export default ThemeProvider