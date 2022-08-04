import React from 'react';
import ContactForm from '../components/ContactForm';
import Icones from '../components/Icones';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import CharteV2 from '../components/CharteV2';

const Contact = () => {
    return (
        <motion.div className='contact' initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <Logo />
            <Navigation />
            <ContactForm />
            <CharteV2 />
            <Icones />
        </motion.div>
    );
};

export default Contact;