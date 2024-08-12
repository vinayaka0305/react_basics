import React from "react";
import useTheme from "./hooks/useTheme";

const Header = () => {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );
  // console.log(JSON.parse(localStorage.getItem('isDarkMode')));
  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  const { isDark, setIsDark } = useTheme();
  console.log(isDark);

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">where in the world ?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid  fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
