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

    const slideInLeft2 = (elem) => {
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

    const slideInLeft3 = (elem) => {
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

    const slideInBottom2 = (elem) => {
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

    const slideInBottom3 = (elem) => {
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
        slideInLeft('.riseIMG');
    }, [])

    useEffect(() => {
        slideInLeft2('.reserviaIMG');
    }, [])

    useEffect(() => {
        slideInLeft3('.mugiIMG');
    }, [])

    useEffect(() => {
        slideInBottom('.riseTexte');
    }, [])

    useEffect(() => {
        slideInBottom2('.reserviaTexte');
    }, [])

    useEffect(() => {
        slideInBottom2('.mugiTexte');
    }, [])



    return (
        <motion.div initial='out' animate='in' exit='out' variants={test1} transition={transition} className='portFolio'>
            <Logo />
            <Navigation />
            
            <div className='folioGroupe'>
                <div className='folioGroupe1'>
                    <div className='RiseToWar'>
                        <a href='https://mugidev.go.yj.fr/index.html' rel="noreferrer lien vers mon site Rise To War" target="_blank" className='linkRiseToWar'>
                            <img src='./img/rise.png' className='riseIMG'></img></a>
                        <span className='riseTexte'>Projet Rise to War
                            <br />HTML - CSS - JavaScrip - JQwerty</span>
                    </div>
                    <div className='reservia'>
                        <a href='https://axelthomas29.github.io/Projet-reservia/' rel="noreferrer lien vers mon site Reservia" target="_blank" className='linkReservia'>
                            <img src='./img/création.png' className='reserviaIMG'></img></a>
                        <span className='reserviaTexte'>Projet Reservia (OpenClassrooms)
                            <br />HTML - CSS</span>
                    </div>
                </div>
                <div className='mugiPorte'>
                    <img src='./img/Logo_noir.png' className='mugiIMG'></img>
                    <span className='mugiTexte'>
                        Ce site est réalisé avec ReactJs.
                        <br />D'autres projets suivront bientôt.
                    </span>
                </div>
            </div>
            <Charte />
        </motion.div>
    );
};

export default PortFolio;