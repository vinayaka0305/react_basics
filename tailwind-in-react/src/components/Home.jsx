import React from "react";
import Counter from "./Counter";
import OldCounter from "./OldCounter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const Home = () => {
  return (
    <>
      <h1>welcome to home</h1>
      {/* <Counter name='new-counter'/>
      <hr className="my-4"/> */}
      {/* <OldCounter name="old-counter"/> */}
      <ClickCounter name="click-counter"/>
      <HoverCounter name="hover-counter"/>
    </>
  );
};

export default Home;
