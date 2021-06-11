import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.png';
import './Header.css';
import header from '../../images/header.png';


const Header = () => {
    return (
        <div className='header'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url(${header})`
            }}>
            <nav className='nav'>
                <ul>
                    <li><img className='logo' src={logo} alt='' /></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link className='btn-booking' to='/booking'>Booking</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
            <div className='title-container'>
                <h1>Hotel Royal</h1>
                <h3>A piece of heaven for your weekend</h3>
            </div>
        </div>
    );
};

export default Header;