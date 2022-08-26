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

      <div style={{width: '55%', marginTop: '90px'}}>


        <h1 className={styles.bannerTitle}>Who...Me?</h1>

        <p className={styles.bannerBio}>
          "Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat."
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
