import React,{useEffect} from 'react'
import styles from "../styles/About.module.css"
import { motion } from "framer-motion"

const timelineData = [
  {
      text: 'Got Campus Placement and Was Introduced to Web Development',
      date: 'June 2021',
      category: {
    tag: 'The Beginning',
    color: '#AFEAA1'
  }
     
  },
  {
      text: 'Started the Weekly Coding Challenge program at the Company on HTML, CSS, SQL ,ReactJs',
      date: 'July 2021',
      category: {
    tag: 'Noob',
    color: '#AFEAA1'
  }
  },
  {
      text: 'Fell In Love with Reactjs and Started doing simple projects',
      date: 'August 2021',
      category: {
    tag: 'The Focus',
    color: '#AACAA1'
  }
  },
  {
      text:'Deployed my first actual website on Github which was my first version of portfolio website using Reactjs, SCSS',
      date: 'November 2021',
      category: {
    tag: 'Proud Moments',
    color: '#AACAA1'
  },
      link: {
          url:'https://anoshmathew.github.io/React-portfolio-website/',
          text: 'Check it out here'
      }
  },
  {
      text: 'Started Learning core PHP because the company asked for it.',
      date: 'January 2022',
      category: {
      tag: 'echo "Hello World!";',
      color: '#AACAA1'
  },
      link: {
          url: '',
          text: 'See profile'
      }
  },
  {
    text: 'Did an admin panel for a company client in React, Bootstrap and he loved it',
    date: 'Febraury - March 2022',
    category: {
  tag: 'The Motivation',
  color: '#018f69'
},
    link: {
        url: 'https://anoshmathew.github.io/Fishing-App-2/',
        text: 'See profile'
    }
},
{
    text: "Did my first real PHP website with colleague's support",
    date: 'April 2022',
    category: {
  tag: 'echo "Hello World!";',
  color: '#018f69'
},
    link: {
        //url: '',
        text: 'Sorry!! Private'
    }
},
{
    text: "Had a concept of making a SAAS website and bought my first domain. Created the website using Reactjs, CSS for frontend and PHP, SQL for backend. Later Deployed!!",
    date: 'April - May 2022 ',
    category: {
  tag: 'FullStack',
  color: '#018f69'
},
    link: {
        url: 'https://a4album.com/',
        text: 'Comming Soon'
    }
},
{
  text: "Also working as freelance React, PHP developer for a startup company",
  date: 'April - Present 2022 ',
  category: {
    tag: 'Too Busy',
    color: '#018f69'
  },

},
{
    text: "Started Building less Chaotic Persional website using Reactjs and CSS. Spoiler Alert! You are viewing it now.",
    date: 'June - Present 2022',
    category: {
  tag: 'Persional Website V2',
  color: '#018f69'
}
},

]

const TimelineItem = ({ data }) => (
  <div className={styles.timelineItem}>
      <div className={styles.timelineItemContent}>
          <span className={styles.tag} style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
              <a
                  href={data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {data.link.text}
              </a>
          )}
          <span className={styles.circle} />
      </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
      <div className={styles.timelineContainer}>
          {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
          ))}
      </div>
  );

function About({setnavSelection}) {
   
        useEffect(() => {
          updateNavSelection();
      
        }, [])
      
        function updateNavSelection()
        {
          setnavSelection("about")
        }
  return (
    <motion.div 
       className={styles.aboutMain}
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition:{duration:0}}}
       >
      <h1>About</h1>
        <Timeline/>
    </motion.div>
  )
}

export default About