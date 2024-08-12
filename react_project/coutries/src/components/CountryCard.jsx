import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, image, population, region, capital, data }) => {
  // console.log(data);
  
  // console.log(name);
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <div className="flag-container">
        <img src={image} alt="Barbados flag" />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b>
          {population}
        </p>
        <p>
          <b>Region:</b>
          {region}
        </p>
        <p>
          <b>Capital:</b>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
