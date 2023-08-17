import React from 'react'
import styles from './footersection.module.css'
import gh from '../../../Images/githubIcon2.png'
import li from '../../../Images/linkedinIcon2.png'
import yt from '../../../Images/youtubeIcon2.png'

export default function FooterSection() {
  return (
    <div className={styles.mainContainer}>

        <div className={styles.linkRow}>
            <a href="#">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </div>


        <div className={styles.socialRow}>

            <img src={gh} onClick={() => {window.open("https://github.com/clawplusstacker")}}/>
            <img src={li} onClick={() => window.open("https://www.linkedin.com/in/colby-beach-57b66017b/")}/>
            <img src={yt} onClick={() => window.open("https://www.youtube.com/c/Claw100Productions1")}/>

        </div>


        Colby Beach - {new Date().getFullYear()}

        
      
    </div>
  )
}
