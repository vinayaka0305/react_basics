import React, { createContext, useState } from "react";

export const Theme_context_prov = createContext();

const Theme_pro = ({children})=>{

   const[darkTheme,setDarkTheme] = useState(true)

   const toggle = ()=>{
    setDarkTheme((prev)=> !prev);
   }

    return(
        <Theme_context_prov.Provider value={{darkTheme,toggle}}>
            {children}
        </Theme_context_prov.Provider>
    )
}

export default Theme_pro