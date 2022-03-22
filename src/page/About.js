import React from 'react';
import Detail from '../components/Detail';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import Charte from '../components/Charte';

const About = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <Logo />
            <Navigation />
            <Detail />
            <Charte />
        </motion.div>
    );
};

export default About;