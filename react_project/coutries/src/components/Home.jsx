import React, {useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesLists from "./CountriesLists";
import useTheme from "./hooks/useTheme";
import "../App.css";

// console.log(ThemeContextProvid);
// const a = useContext(ThemeContextProvid);
// console.log(a);

const Home = () => {
  const [query, setQuery] = useState("");
  const { isDark } = useTheme()
  // console.log(isDark);


  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      {query === "unmount" ? "" : <CountriesLists query={query} />}
    </main>
  );
};

export default Home;
