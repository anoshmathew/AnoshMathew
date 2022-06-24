import React from 'react'
import styles from "../styles/Home.module.css"
import { motion } from "framer-motion"
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
function Home() {
  return (
    <div className={styles.homeMain}>
        <motion.div 
            className={styles.homeAnimation}
            initial={{width:"0"}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition:{duration:0.3}}}>
            Home
        </motion.div>
    </div>   
  )
}

export default Home