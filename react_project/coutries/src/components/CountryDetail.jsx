import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import CoutryDetailShimmer from "./CoutryDetailShimmer";
import "./countryDetail.css";

const CountryDetail = () => {
  const { isDark } = useTheme();
  // const[isDark] = useOutletContext()
  const params = useParams();
  const { state } = useLocation();

  console.log(state);
  const navigate = useNavigate();
  // console.log(params);
  const countryName = params.country;

  // const countryName = new URLSearchParams(window.location.search).get("name");

  // console.log(countryName);

  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  // const[countryName,setCountryName] = useState('')
  // console.log(countryName);
  console.log(data);
  function updateCoutryData(data) {
    setData({
      name: data.name.common || data.name,
      flags: data.flags.svg,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0]?.common
        : data.name.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: data.currencies
        ? Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", ")
        : "N/A",
      symbol: data.currencies
        ? Object.values(data.currencies)
            .map((currency) => currency.symbol)
            .join(", ")
        : "N/A",
      languages: data.languages
        ? Object.values(data.languages).join(", ")
        : "N/A",
      borders: [],
    });
    // console.log(
    //   Object.values(data.currencies)
    //     .map((currency) => currency.name)
    //     .join(", ")
    // );
    // https://restcoutries.com/v3.1/alpha/${border}
    // console.log(data.borders)
    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      // console.log(borders);

      setTimeout(() => setData((prev) => ({ ...prev, borders })));
    });
  }

  useEffect(() => {
    // const countryName = new URLSearchParams(window.location.search).get('name');
    // setCountryName(countryName)

    // if(countryName){
    //   fetchData(countryName);
    // }
    if (state) {
      updateCoutryData(state);
      return;
    }
    fetchData();
  }, [countryName]);

  const fetchData = () => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCoutryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  };

  if (notFound) {
    return <div>Country not found</div>;
  }

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left">&nbsp; Back</i>
        </span>
        {data === null ? (
          <CoutryDetailShimmer />
        ) : (
          <div className="country-details">
            <img src={data.flags} alt={data.name} />
            <div className="details-text-container">
              <h1>{data.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name:{data.nativeName || data.name}</b>
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
                  <span className="capital">{data.capital?.join(", ")}</span>
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

              {data.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries:</b>&nbsp;
                  {data.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryDetail;
