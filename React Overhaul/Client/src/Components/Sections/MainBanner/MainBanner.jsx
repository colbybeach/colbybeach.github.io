import React from 'react'
import styles from './mainbanner.module.css'
import Button from '@mui/material/Button'
import githubIcon from '../../../Images/githubIcon.png'
import linkedinIcon from '../../../Images/linkedinIcon.png'
import youtubeIcon from '../../../Images/youtubeIcon.png'
import nobackground from '../../../Images/nobackground.png'


export default function MainBanner() {

  return (
    
    <div className={styles.MainBannerContainer}>

      <div className={styles.leftSide}>


        <h1 className={styles.bannerTitle}>Who...Me?</h1>

        <p className={styles.bannerBio}>
              Hey everyone! My name is Colby Beach, a Junior at 
              Union College in Schenectady, NY, studying both 
              Computer Science and Economics! Since I was 
              8 years old I have had an extreme passion for 
              technology, and I have since learned various tools to 
              create different projects ranging from mobile appications,
              web apps, and Chrome extensions! Please feel free to reach out
              with the contact form below :)
        </p>


        <div style={{display: 'flex'}}>

          <Button 
            className={styles.contactButton} 
            variant="contained" 
            href="#contact"
          >
            Contact Me!
          </Button>


        </div>

      </div>

      <div className={styles.rightSide}>

        <div className={styles.backgroundSquare}>
        </div>

        <img src={nobackground} className={styles.colbyImage}/>

        <div className={styles.socialMediaIcon1Box}>
          <img className={styles.socialMediaIcon} src={githubIcon} />
        </div>


        <div className={styles.socialMediaIcon2Box}>
          <img className={styles.socialMediaIcon} src={linkedinIcon} />
        </div>

        <div className={styles.socialMediaIcon3Box}>
          <img className={styles.socialMediaIcon} src={youtubeIcon} />
        </div>
        
      </div>
    </div>
  )
}
