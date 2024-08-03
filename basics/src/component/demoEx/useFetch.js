import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setaData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setaData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return data;
};

export default useFetch;
