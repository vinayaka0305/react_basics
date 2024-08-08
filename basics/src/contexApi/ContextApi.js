import React, { createContext, useState } from 'react'

export const ContexPro = createContext()

const ContextApi = ({children}) => {

   const [userName,setUserName] = useState("vinayaka")

  return (
   <>
       <ContexPro.Provider value={{userName}}>
            {children}
        </ContexPro.Provider> 
   </>
  )
}

export default ContextApi