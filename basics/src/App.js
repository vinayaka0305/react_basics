import React from "react";
import Theme_pro from "./theme_context_p/Theme_pro";
// import LightDark from "./component/light_dark/LightDark";
// import Counter from "./component/use_reducer/Counter";
// import UseRef from "./component/useRef/UseRef";
// import UseRef2 from "./component/useRef/UseRef2";
import UseMemo from "./component/useMemo/UseMemo";

const App = () => {
  return (
    <>
      <Theme_pro>
        <UseMemo/>
      </Theme_pro>
    </>
  );
};

export default App;
