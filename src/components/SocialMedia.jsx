import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import styles from '../styles/SocialMedia.module.css'
function SocialMedia() {
  return (
    <div>
      <div className={styles.socialMedia}>
        <div className={styles.icons}>
          <div className={styles.github}>
          <a href="https://github.com/anoshmathew" target="_blank"><i  className='fa fa-github'></i></a>
          </div>
          <div className={styles.envelope}>
            <a href="mailto:anosh.mathew99@gmail.com" target="_blank"><i className='fa fa-envelope'></i></a>
          </div>
          <div className={styles.phone}>
            <a href="https://www.linkedin.com/in/anosh-mathew-b8313118b/" target="_blank"><i className='fa fa-linkedin'></i></a>
          </div>       
        </div>
        <div className={styles.line}>

        </div>
        <div className={styles.textContainer}>
        <p className={styles.text}>Follow Me</p> 
        </div>

      </div>
    </div>
  );
}

export default SocialMedia