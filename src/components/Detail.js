import React from 'react';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Detail = () => {

    const slideInLeft = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            x: -1000,
        },
            {
                opacity: 1,
                x: 0,
                delay: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    
                }
            }
        )
    }

    useEffect(() => {
        slideInLeft('.presentation');
    }, [])

    return (
        <div className='detail'>
            <span className='travailPresentaion'>Comment fonctionnons-nous ?</span>
            <div className='travail'>
                <div className='creation animation3'>
                    <img src='./img/entretien.jpg' className='entretienIMG' alt='entretien rendez-vous' />
                    <span className='creationTexte' />Rendez-vous et première ébauche du projet
                </div>
                <div className='creation animation1'>
                    <img src='./img/création.png' className='creationIMG' alt='création site web projet' />
                    <span className='creationTexte' />Création du projet<br /> suivant le cahier des charges
                </div>
                <div className='creation animation2'>
                    <img src='./img/terminer.webp' className='terminerIMG' alt='rendu de projet' />
                    <span className='creationTexte' />Livraison et mise en ligne du projet
                </div>
            </div>
            <div className='infos'>
                <p />Mugui Développement vous propose de créer votre futur site web avec les technologies les plus récentes pour un résultat plus rapide, plus fluide et plus dynamique
                <p className='infosTexte' />Vous souhaitez mettre en avant votre entreprise ou votre association, n'hésitez pas
                <p className='infosTexte' />Nous créons avec vous le projet et nous validons ensemble chaque étape pour un résultat qui correspond parfaitement à vos attentes
            </div>
            <div className='presentation'>
                <h1 className='titrePresentation'>Qui sommes-nous ?</h1>
                <p className='presentationTexte'>Micro-entreprise basée en Bretagne, nous avons pour objectif de concevoir et développer des sites web avec des technologies comme JavaScript et ReactJs</p>
                <p className='presentationTexte'>Fondée en 2022, Mugui Développement se veut à la hauteur du marché</p>
                <p className='presentationTexte'>Jeune et Dynamique nous sommes prêt à répondre aux demandes de nos clients</p>
            </div>
        </div>
    );
};

export default Detail;