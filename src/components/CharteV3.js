import React from 'react';
import { NavLink } from 'react-router-dom';

const CharteV3 = () => {
    return (
        <footer>
            <div className='charteV3'>
                <NavLink to="/mentionslegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='mentionLegale-V3'>
                        Mentions Légales
                    </span>
                </NavLink>
                <NavLink to="/cgv" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='CGV-V3'>
                        CGV
                    </span>
                </NavLink>
                <NavLink to="/cookies" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='donneesPerso-V3'>
                        Traitement des données personnelles
                    </span>
                </NavLink>
            </div>
        </footer>
    );
};

export default CharteV3;