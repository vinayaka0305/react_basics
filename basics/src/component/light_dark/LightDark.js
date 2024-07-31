import React, { useContext } from "react";
import { Theme_context_prov } from "../../theme_context_p/Theme_pro";

const LightDark = () => {
  const { darkTheme,toggle } = useContext(Theme_context_prov);

  console.log(toggle);

  const style = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    padding:"100px",
    marign:"100px"
  }

  return (
    <>
      <div style={style}>LightDark</div>
      <button onClick={toggle}>Button</button>
    </>
  );
};

export default LightDark;
