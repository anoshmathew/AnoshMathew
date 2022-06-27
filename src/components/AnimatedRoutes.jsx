import React from 'react'
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes({navSelection,setnavSelection}) {
    const location = useLocation();
    console.log(navSelection);
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home setnavSelection={setnavSelection}/>} />
          <Route path="/about" element={<About setnavSelection={setnavSelection}/>} />
          <Route path="/contact" element={<Contact setnavSelection={setnavSelection}/>} />
        </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes