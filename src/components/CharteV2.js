import React from 'react';
import { NavLink } from 'react-router-dom';

const CharteV2 = () => {
    return (
        <div className='charteV2'>
            <NavLink to="/MentionsLegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='mentionLegale-V2'>
                    Mentions Légales
                </span>
            </NavLink>
            <NavLink to="/CGV" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='CGV-V2'>
                    CGV
                </span>
            </NavLink>
            <NavLink to="/Cookies" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='donneesPerso-V2'>
                    Traitement des données personnelles
                </span>
            </NavLink>
        </div>
    );
};

export default CharteV2;