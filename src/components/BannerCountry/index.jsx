import React from 'react';
import './index.css';
import imgCountry from '../../assets/img/country.png';


const BannerCountry = () => {

    return (
        <div className="banner-country-container">
            <div className="banner-country-title">
                <h2>WE HAVE A RESTAURANT ALL AROUND THE COUNTRY</h2>
            </div>
            <div className="banner-country-image">
                <img src={imgCountry} alt="banner-country" className="banner-country-image"/>
            </div>
        </div>
    )
}

export default BannerCountry;