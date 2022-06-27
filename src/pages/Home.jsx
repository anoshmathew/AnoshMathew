import React,{useEffect, useRef} from 'react'
import styles from "../styles/Home.module.css"
import { motion } from "framer-motion"
import { init } from 'ityped'

function Home({setnavSelection}) {
  const textRef = useRef();
  useEffect(() => {
    updateNavSelection();

  }, [])

  function updateNavSelection()
  {
    setnavSelection("home")
  }
  useEffect(() => {
    init(textRef.current, {
         showCursor: true, 
         backDelay:1500,
         backSpeed:60,
         strings: ['React Developer', 'Freelancer', 'Coffee Lover' ] 
        });
}, []);

  return (
    <div className={styles.homeMain}>
        <motion.div 
            className={styles.homeAnimation}
            initial={{width:"0"}}
            animate={{width:"100%"}}
            exit={{}}>
            <div className={styles.homeMainBox}>
              <div className={styles.homeLeftBox}>
                <div className={styles.heading}>
                  <h1>
                    Hi, Im Anosh Mathew
                  </h1>
                </div>
                <div className={styles.content}>
                  <h2>
                    Im a <span ref={textRef}></span>
                  </h2>
                </div>


              </div>
              <div className={styles.homeRightBox}>
                
              </div>
            </div>
            <div>

            </div>
        </motion.div>
    </div>   
  )
}

export default Home