import React,{useState,useEffect} from 'react'
import styles from "../styles/Contact.module.css"
import { motion } from "framer-motion"

function Contact({setnavSelection}) {
  const [sendButton, setsendButton] = useState("")
  let contactInitialize = {
    Name: "",
    SendersEmail: "",
    Message: "Hi Anosh, ",
    status: "unsend"
  }
  useEffect(() => {
    updateNavSelection();
  }, [])
  const [data, setData] = useState(contactInitialize);
  //console.log(data);
  function updateNavSelection()
  {
    setnavSelection("contact")
  }
  function sendFunction(){
    setData({...data, status:"sent"})
  }
  if(data.status==="sent"){
    setTimeout(() => {
      setData(contactInitialize)
    }, 3000)
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  return (
    
    <motion.div 
      className={styles.contactMain}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x: window.innerWidth, transition:{duration:0}}}
      >
      <div className={styles.container}>
        <p className={styles.heading}>SAY HELLO</p>
    
        <div className={styles.login}>
          <input type="text" id='Name' placeholder="Your Name" onChange={(e) => handle(e)} value={data.Name} className={styles.input}/>
          <input type="text" id='SendersEmail' placeholder="Your Email Address"  onChange={(e) => handle(e)} value={data.SendersEmail} className={styles.input}/>
        </div>
    
        <div className={styles.msg}>
          <textarea id='Message' className={styles.area} onChange={(e) => handle(e)} value={data.Message} placeholder="Leave a Message"></textarea>
        </div>
    
        {
          data.status === 'unsend' ? 
          <div tyle='button' className={styles.btn} onClick={sendFunction}>Send Message</div>
          :
          <div tyle='button' className={styles.btn} onClick={sendFunction}><i className='fa fa-check'></i>Message Sent</div>
        }
  
        <div className={styles.quickContacts}>
          <div className={styles.gmail}>Gmail:anosh.mathew99@gmail.com</div>
          <div className={styles.phone}>Phone:+91 8921162428</div>
        </div>
    
      </div>
    </motion.div>
  )
}

export default Contact