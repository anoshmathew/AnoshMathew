import React from 'react'
import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
        
        <div className={styles.centerPart}>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/about' className={styles.link}>About</Link>

            <Link to='/contact' className={styles.link}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar