import React from 'react'
import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.css'

function Navbar({navSelection}) {
  return (
    <div className={styles.navbar}>
        <div className={styles.centerPart}>
            <Link to='/' className={navSelection == 'home'? styles.linkActive : styles.link}>Home</Link>
            <Link to='/about' className={navSelection == 'about'? styles.linkActive : styles.link}>About</Link>
            <Link to='/contact' className={navSelection == 'contact'? styles.linkActive : styles.link}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar