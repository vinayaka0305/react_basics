import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesLists from "./CountriesLists";
import "../App.css";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesLists query={query} />}
    </main>
  );
};

export default Home;
