import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("vinyaka");
  return (
    <LoginContext.Provider value={userName}>{children}</LoginContext.Provider>
  );
};

export default LoginContextProvider;
