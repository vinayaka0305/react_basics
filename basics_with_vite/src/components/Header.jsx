import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/useReducer">use-reducer</Link>
        </li>
        <li>
          <Link to="/useRef">use-ref</Link>
        </li>
        <li>
          <Link to="/useMemo">use-memo</Link>
        </li>
        <li>
          <Link to="/useCallBack">use-callback</Link>
        </li>
        <li>
          <Link to="/customHook">custom-hook</Link>
        </li>
        <li>
          <Link to="/axios">axios</Link>
        </li>
        <li>
          <Link to="/forms">forms</Link>
        </li>
        <li>
          <Link>SignIN</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
