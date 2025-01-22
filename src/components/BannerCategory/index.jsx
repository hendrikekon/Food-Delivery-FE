import React from 'react';
import './index.css';
import imgCate1 from '../../assets/img/cate1.png';
import imgCate2 from '../../assets/img/cate2.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory, fetchProduct } from '../../app/features/Product/actions';


const BannerCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCategory = (category) => {
        dispatch(setCategory(category));
        dispatch(fetchProduct());
        navigate('/menu-products');
    };
    return (
        <div className="banner-category-container">
            <div className="banner-category-title">
                <h2>Something Delicious You Might Like</h2>
            </div>
            <div className="banner-category-grid-image">
                <img src={imgCate1} alt="banner-category" onClick={() => handleCategory('Food')} className="banner-category-image"/>
                <img src={imgCate2} alt="banner-category" onClick={() => handleCategory('Drink')} className="banner-category-image"/>
            </div>
        </div>
    )
}

export default BannerCategory;