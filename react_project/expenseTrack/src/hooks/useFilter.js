import React, { useState } from "react";
import useLocaleStorage from "./useLocaleStorage";

const useFilter = (dataList, callback) => {
  // const [query, setQuery] = useState("");
  const [query, setQuery] = useLocaleStorage("query",'');

  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
};

export default useFilter;
