import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
        // console.log(data);
        setData(data);
      })
  };

  return data;
};

export default useFetch;
