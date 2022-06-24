import React from 'react'
import styles from "../styles/About.module.css"
import { motion } from "framer-motion"
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
function About() {
  return (
    <motion.div 
       className={styles.aboutMain}
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition:{duration:0.3}}}
       >
        About
    </motion.div>
  )
}

export default About