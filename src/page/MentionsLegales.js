import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Charte from '../components/Charte';

const MentionsLegales = () => {
    return (
        <div className='mentionsLegales'>
              <Logo />
            <Navigation />
            <div className='mentions'>
                <span>
                    Raison sociale : Mugi Développement
                    <br />Nom du directeur : Thomas Axel
                    <br />Nom du directeur de publication : Thomas Axel
                    <br />Siège Social : St martin des champs 29600
                    <br />Numéro de téléphone : 06.58.69.05.37
                    <br />Hébergeur : Hostinger
                    <br />Numéro de SIRET :
                    <br />Numéro SIREN :
                </span>
            </div>
            <Charte />
        </div>
    );
};

export default MentionsLegales;