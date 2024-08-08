import React, { useEffect, useState } from "react";
import "./countryDetail.css"

const CountryDetail = () => {
  const countryName = new URLSearchParams(window.location.search).get("name");

  const [data, setData] = useState(null);
  // const[countryName,setCountryName] = useState('')
  // console.log(countryName);

  useEffect(() => {
    // const countryName = new URLSearchParams(window.location.search).get('name');
    // setCountryName(countryName)

    // if(countryName){
    //   fetchData(countryName);
    // }
    fetchData();
  }, []);

  const fetchData = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setData({
          name: data.name.common,
          flags: data.flags.svg,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          symbol: Object.values(data.currencies)
            .map((currency) => currency.symbol)
            .join(", "),
          languages: Object.values(data.languages).join(", "),
        });
        console.log(
          Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", ")
        );
        console.log(data.borders)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return data === null ? (
    "loading....."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left">&nbsp; Back</i>
        </span>
        <div className="country-details">
          <img src={data.flags} alt={data.name} />
          <div className="details-text-container">
            <h1>{data.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:{data.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population:{data.population.toLocaleString("en-IN")}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region:</b>
                <span className="region">{data.region}</span>
              </p>
              <p>
                <b>Sub Region:</b>
                <span className="sub-region">{data.subregion}</span>
              </p>
              <p>
                <b>Capital:</b>
                <span className="capital">{data.capital.join(', ')}</span>
              </p>
              <p>
                <b>Top Level Domain:</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies:</b>
                <span className="currencies">{data.currencies}</span>
              </p>
              <p>
                <b>Symbol:</b>
                <span className="currencies">{data.symbol}</span>
              </p>
              <p>
                <b>Languages:</b>
                <span className="languages">{data.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries:</b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
