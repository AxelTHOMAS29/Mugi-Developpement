import React from 'react';
import { NavLink } from 'react-router-dom';

const CharteV2 = () => {
    return (
        <footer>
            <div className='charteV2'>
                <NavLink to="/mentionslegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='mentionLegale-V2'>
                        Mentions Légales
                    </span>
                </NavLink>
                <NavLink to="/cgv" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='CGV-V2'>
                        CGV
                    </span>
                </NavLink>
                <NavLink to="/cookies" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='donneesPerso-V2'>
                        Traitement des données personnelles
                    </span>
                </NavLink>
            </div>
        </footer>
    );
};

export default CharteV2;