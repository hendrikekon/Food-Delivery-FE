import React from 'react';
import './index.css';
import BannerSlick from '../../components/BannerSlick';
import BannerCountry from '../../components/BannerCountry';
import BannerMenu from '../../components/BannerAllMenu';
import BannerCategory from '../../components/BannerCategory';


const Home = ({ isLoggedIn }) => {


    return (
        <div className='home-container'>
            <div className='home-grid'>
                <BannerSlick />
                <BannerMenu />
                <BannerCategory />
                <BannerCountry />
            </div>
        </div> 
    );
};

export default Home