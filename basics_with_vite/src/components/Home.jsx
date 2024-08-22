import React, { useContext } from "react";
import CounterWithClass from "./CounterWithClass";
import CounterWithFunction from "./CounterWithFunction";
import { ThemeContext } from "../context/ThemeProvide";

const Home = () => {
  const { dark, toggle } = useContext(ThemeContext);

  const cssStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <>
      <div style={cssStyle}>
        <h2>Home</h2>
        <CounterWithClass />
        {/* <CounterWithFunction/> */}
        <button onClick={toggle}>Toggle</button>
      </div>
    </>
  );
};

export default Home;
