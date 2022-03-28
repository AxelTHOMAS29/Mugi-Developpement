import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import NotFound from './page/NotFound';
import MentionsLegales from './page/MentionsLegales';
import CGV from './page/CGV';
import Cookies from './page/Cookies';
import { AnimatePresence } from "framer-motion";
import PortFolio from './page/PortFolio';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/portfolio" exact element={<PortFolio />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
