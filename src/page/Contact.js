import React from 'react';
import ContactForm from '../components/ContactForm';
import Icones from '../components/Icones';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import Charte from '../components/Charte';

const Contact = () => {
    return (
        <motion.div className='contact' initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <Logo />
            <Navigation />
            <ContactForm />
            <Charte />
            <Icones />
        </motion.div>
    );
};

export default Contact;