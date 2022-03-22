import React from 'react';
import { NavLink } from 'react-router-dom';

const CharteV3 = () => {
    return (
        <div className='charteV3'>
            <NavLink to="/MentionsLegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='mentionLegale-V3'>
                    Mentions Légales
                </span>
            </NavLink>
            <NavLink to="/CGV" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='CGV-V3'>
                    CGV
                </span>
            </NavLink>
            <NavLink to="/Cookies" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='donneesPerso-V3'>
                    Traitement des données personnelles
                </span>
            </NavLink>
        </div>
    );
};

export default CharteV3;