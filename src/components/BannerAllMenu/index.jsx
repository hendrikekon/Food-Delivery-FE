import React from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { setCategory, setKeyword, fetchProduct } from '../../app/features/Product/actions';
import { NavLink, useNavigate } from 'react-router-dom';



const BannerMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMenu = () => {
        dispatch(setCategory('')); 
        dispatch(setKeyword('')); 
        dispatch(fetchProduct());
        navigate('/menu-products')
    };
    return (
        <div className="banner-menu-container">
            <div className="banner-menu-title">
                <h2>SEE ALL OUR MENU</h2>
            </div>
            <div className="banner-menu-grid">
                <NavLink to="/menu-products" onClick={handleMenu} className="banner-menu-link">MENU</NavLink>
            </div>
        </div>
    )
}

export default BannerMenu;