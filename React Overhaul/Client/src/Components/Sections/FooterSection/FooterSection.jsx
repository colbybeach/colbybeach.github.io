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

            <img src={gh}/>
            <img src={li}/>
            <img src={yt}/>

        </div>


        Colby Beach - {new Date().getFullYear()}

        
      
    </div>
  )
}
