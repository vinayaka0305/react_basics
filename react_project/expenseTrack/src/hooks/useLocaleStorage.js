import React, { useEffect, useState } from "react";

const useLocaleStorage = (key, initialData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const exsistingData = JSON.parse(localStorage.getItem(key));
    if (exsistingData) {
      setData(exsistingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLoacaleStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  };

  return [data, updateLoacaleStorage];
};

export default useLocaleStorage;
