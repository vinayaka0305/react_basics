import React, { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState([]);
  console.log(url);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  return data;
};

export default useFetch;
