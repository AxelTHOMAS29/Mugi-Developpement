import React from 'react';
import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { test1 } from '../animation/animation';
import { transition } from '../animation/animation';
import Charte from '../components/Charte';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const PortFolio = () => {

    const slideInLeft = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            x: -100,
        },
            {
                opacity: 1,
                x: 0,
                delay: 0.5,
                duration: 1.5,
                scrollTrigger: {
                    trigger: elem,

                }
            }
        )
    }

    const slideInBottom = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            y: 50,
        },
            {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 1.5,
                scrollTrigger: {
                    trigger: elem,

                }
            }
        )
    }

    useEffect(() => {
        slideInLeft('.folioIMG');
    }, [])

    useEffect(() => {
        slideInBottom('.Texte-Container');
    }, [])

    return (
        <motion.div initial='out' animate='in' exit='out' variants={test1} transition={transition} className='portFolio'>
            <Logo />
            <Navigation />

            <div className='folioGroupe'>
                <div className='folioGroupe-container'>
                    <div className='AtelierTycoz folio'>
                        <a href='https://atelier-tycoz.fr/' rel="noreferrer lien vers AtelierTyCoz" target="_blank" className='linkAtelierTycoz'>
                            <img src='./img/LOGO ATELIER.png' alt='Logo Atelier Tycoz' className='TycozIMG folioIMG'></img></a>
                        <div className='Texte-Container'>
                            <span className='Atelier-txt'>Site de l'entreprise Atelier Tycoz
                                <br />Projet réalisé avec <FontAwesomeIcon icon={faReact} alt='ReactJS' className='icon-React' /> </span>
                        </div>
                    </div>
                    <div className='reservia folio'>
                        <a href='https://axelthomas29.github.io/Projet-reservia/' rel="noreferrer lien vers mon site Reservia" target="_blank" className='linkReservia'>
                            <img src='./img/creation.png' alt='projet web reservia' className='reserviaIMG folioIMG'></img></a>
                        <div className='Texte-Container'>
                            <span className='reserviaTexte'>Projet Reservia</span>
                            <span className='reserviaIcon'><FontAwesomeIcon icon={faHtml5} alt='HTML' /> - <FontAwesomeIcon icon={faCss3} alt='CSS' /></span>
                        </div>
                    </div>
                </div>
                <div className='folioGroupe-container'>
                    <div className='mugiPorte folio'>
                        <img src='./img/Logo_noir.png' alt='logo Mugi Développement' className='mugiIMG folioIMG'></img>
                        <span className='mugiTexte Texte-Container'>
                            Ce site est réalisé avec 
                            <FontAwesomeIcon icon={faReact} alt='ReactJS' className='icon-React' />
                        </span>
                    </div>
                    <div className='RiseToWar folio'>
                        <a href='https://mugidev.go.yj.fr/index.html' rel="noreferrer lien vers mon site Rise To War" target="_blank" className='linkRiseToWar'>
                            <img src='./img/war.png' alt='projet web Rise to War' className='riseIMG folioIMG'></img></a>
                        <div className='Texte-Container'>
                            <span className='riseTexte'>Projet Rise to War</span>
                            <span className='riseIcon'> <FontAwesomeIcon icon={faHtml5} alt='HTML' /> - <FontAwesomeIcon icon={faCss3} alt='CSS' /> - <FontAwesomeIcon icon={faJs} alt='Javascript' /></span>
                        </div>
                    </div>
                </div>
            </div>
            <Charte />
        </motion.div>
    );
};

export default PortFolio;