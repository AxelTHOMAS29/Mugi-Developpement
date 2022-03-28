import React from 'react';
import Charte from '../components/Charte';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const CGV = () => {
    return (
        <div className='cgv'>
            <Logo />
            <Navigation />
            <div className='cgvTexte'>
                <h1>Information</h1>
                <span />Mugi Développement ne commercialise aucun service depuis ce site.
                    <br />Pour toute demande de prestation merci de nous contacter directement avec la page contact.
                    <br />Toute demande de service sera suivie d'une proposition de site accompagnée d'un devis. 
                    <br />Une fois le devis signé par les 2 parties le projet sera lancé avec un suivis pour le client jusqu'à livraison du site.
            </div>
            <div className='tarif'>
                <img src='./img/tarif.png' alt="nos tarifs" target="_blank" className='imgTarif'>
                </img>
            </div>
            <Charte />
            
        </div>
    );
};

export default CGV;