import React, { useEffect } from 'react';
import gsap from 'gsap';
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icones = () => {

    const slideInTop = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            y: -1000,
        },
            {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 1,
            }
        )
    }

    const slideInRight = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            x: 1000,
        },
            {
                opacity: 1,
                x: 0,
                delay: 0.3,
                duration: 1,
            }
        )
    }

    useEffect(() => {
        slideInTop('.linkLinkedin');
    }, [])

    useEffect(() => {
        slideInRight('.linkTwitter');
    }, [])

    return (
        <div className='groupeIcone'>
            <a href="https://www.linkedin.com/in/axel-thomas-" rel="noreferrer lien vers mon profil Linkedin" target="_blank" className='linkLinkedin icon'>
                <FontAwesomeIcon icon={faLinkedin} alt='Linkedin' />
            </a>
            <a href='https://twitter.com/MuguiDev' rel="noreferrer lien vers mon profil twitter" target='_blank' className='linkTwitter icon'>
                <FontAwesomeIcon icon={faTwitter} alt='Twitter' />
            </a>
        </div>
    );
};

export default Icones;