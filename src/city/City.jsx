import React from "react";

export const City = ({cityName, population, area, district, photo}) => (
    <div className='container'>
        <h2 className="city-name">{cityName}</h2>
        <p>Počet obyvatel: {population}</p>
        <p>Rozloha: {area} km<sup>2</sup></p>
        <p>Okres: {district}</p>
        <img src={photo} alt="foto města" className="city-photo"/>

    </div>
);


