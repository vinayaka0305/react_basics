import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const[data,setData] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = ()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    }
  return data;
}

export default useFetch