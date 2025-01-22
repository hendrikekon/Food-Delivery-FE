import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import imgBanner1 from '../../assets/img/banner1.png';
import imgBanner2 from '../../assets/img/banner2.png';
import imgBanner3 from '../../assets/img/banner3.png';
import imgBanner4 from '../../assets/img/banner4.png';



const BannerSlick = () => {

    const data = [
        imgBanner1,
        imgBanner2,
        imgBanner3,
        imgBanner4,
    ];

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
        ◀
        </div>
    );
    
    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
        ▶
        </div>
    );


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className="banner-slick-container">
        <Slider {...settings}>
            {data.map((data, index) => (
            <Link key={index} className="banner-slick-link">
                <div className="banner-slick-slide">
                    <div className="banner-slick-slide-image">
                        <img src={data} alt="banner slick" className="banner-slick-image"/>
                    </div>
                </div>
            </Link>
            ))}
        </Slider>
        
        
        </div>
    )
}

export default BannerSlick;