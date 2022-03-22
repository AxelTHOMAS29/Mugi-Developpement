import React from 'react';
import { NavLink } from 'react-router-dom';

const Charte = () => {
    return (
        <div className='charte'>
            <NavLink to="/MentionsLegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='mentionLegale'>
                    Mentions Légales
                </span>
            </NavLink>
            <NavLink to="/CGV" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='CGV'>
                    CGV
                </span>
            </NavLink>
            <NavLink to="/Cookies" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <span className='donneesPerso'>
                    Traitement des données personnelles
                </span>
            </NavLink>
        </div>
    );
};

export default Charte;