import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, capital, population, flags } = props.country;
    // console.log(flag);
    return (
        <div className="single-div">
            <div className="flag-img">
                <img src={flags[0]} alt=""></img>
            </div>
            <h3>Name:{name}</h3>
            <h3>Capital:{capital}</h3>
            <h3>Population:{population}</h3>
        </div>
    );
};

export default Country;