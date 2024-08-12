import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CoutriesListShimmer from "./CoutriesListShimmer";

const CountriesLists = ({ query }) => {
  // const[query,setQuery] = useState('')
  // console.log(countriesData);

  // const array = [
  //   <CountryCard/>,
  //   <CountryCard/>,
  //   <CountryCard/>,
  //   <CountryCard/>,
  //   <CountryCard/>,
  // ]

  // console.log(array);
  // const arr = countriesData.filter((country)=> country.name.common.toLowerCase().includes('india'));
  // // console.log(arr);

  const [countriesData, setCountriesData] = useState([]);
  // const[count,setCount] = useState(0);

  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  };

  useEffect(() => {
    fetchData();

    // const timerId = setInterval(()=>{
    //   console.log("this countries list component is running");
    // },[1000])

    // console.log(timerId);

    // return()=>{
    //   clearInterval(timerId)
    // }
  }, []);

  // useEffect(()=>{
  //   console.log("hi");
  // },[count,countriesData])

  // fetch('https://restcountries.com/v3.1/all')
  // .then((res)=>res.json())
  // .then((data)=>{
  //   setCountriesData(data)
  // })
  // we use this instead of ternary operator
  // if(countriesData.length === 0){
  //   return <CoutriesListShimmer/>
  // }

  return (
    <>
      {!countriesData.length ? (
        <CoutriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter(
              (country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  image={country.flags.svg}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default CountriesLists;
