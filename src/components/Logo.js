import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <img src='./img/Logo_noir.png' alt='logo Mugi Développement web' />
            </NavLink>
        </div>
    );
};

export default Logo;