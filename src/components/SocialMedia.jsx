import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import styles from '../styles/SocialMedia.module.css'
function SocialMedia() {
  return (
    <div>
      <div className={styles.socialMedia}>
        <div className={styles.icons}>
          <div className={styles.github}>
            <i className='fa fa-github'></i>
          </div>
          <div className={styles.envelope}>
            <i className='fa fa-envelope'></i>
          </div>
          <div className={styles.phone}>
            <i className='fa fa-phone'></i>
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