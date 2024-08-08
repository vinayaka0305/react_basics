import React,{useState} from "react";
// import LightDark from "./component/light_dark/LightDark";
// import Counter from "./component/use_reducer/Counter";
// import UseRef from "./component/useRef/UseRef";
// import UseRef2 from "./component/useRef/UseRef2";
// import UseMemo from "./component/useMemo/UseMemo";
// import NewTheme from "./component/NewTheme";
// import UseCallBack from "./component/useCallback/UseCallBack";
// import Example from "./component/customHook/Example";
// import UseEffect from "./component/demoEx/UseEffect";
// import UseEffectCleanUp from "./component/demoEx/UseEffectCleanUp";
// import UECleanUpEx2 from "./component/demoEx/UECleanUpEx2";
import ExamaPle from "./component/demoEx/ExamaPle";
import ContextApi from "./contexApi/ContextApi";
import Header from "./component/Header/Header";

const App = () => {
  const[query,setQuery] = useState('')
  return (
    <>
      <ContextApi>
        <Header setQuery={setQuery}/>
        <ExamaPle query={query}/>
      </ContextApi>
    </>
  );
};

export default App;
