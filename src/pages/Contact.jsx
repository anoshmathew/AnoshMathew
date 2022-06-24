import React from 'react'
import styles from "../styles/Contact.module.css"
import { motion } from "framer-motion"
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
function Contact() {
  return (
 
    <motion.div 
       className={styles.contactMain}
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition:{duration:0.3}}}
       >
       Contact
    </motion.div>
  )
}

export default Contact