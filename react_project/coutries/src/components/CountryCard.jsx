import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({name,image,population,region,capital}) => {
  return (
    <Link className="country-card" to={`/country?name=${name}`}>
      <img src={image} alt="Barbados flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b>{population}
        </p>
        <p>
          <b>Region:</b>{region}
        </p>
        <p>
          <b>Capital:</b>{capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
