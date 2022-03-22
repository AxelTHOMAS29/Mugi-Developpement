import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import CharteV3 from '../components/CharteV3';

const Cookies = () => {
    return (
        <div>
              <Logo />
            <Navigation />
            <div className='cookies'>
                Ce site n'utilise pas de cookies ou d'autres applications de collectes de données.
            </div>
            <CharteV3 />
        </div>
    );
};

export default Cookies;