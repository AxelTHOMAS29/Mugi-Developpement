import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import DynamicText from "../components/DynamiqueTexte";
import Acceuil from "../components/Acceuil";
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import CharteV2 from "../components/CharteV2";

const Home = () => {
    return (
        <motion.div className="home" initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <Logo />
            <Navigation />
            <DynamicText />
            <CharteV2 />
        </motion.div>
    );
};

export default Home;