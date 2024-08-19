import React from "react";
import Counter from "./Counter";
import OldCounter from "./OldCounter";

const Home = () => {
  return (
    <>
      <h1>welcome to home</h1>
      {/* <Counter name='new-counter'/>
      <hr className="my-4"/> */}
      <OldCounter name="old-counter"/>
    </>
  );
};

export default Home;
