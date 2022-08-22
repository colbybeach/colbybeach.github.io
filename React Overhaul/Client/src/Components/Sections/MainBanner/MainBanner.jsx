import React from 'react'
import styles from './mainbanner.module.css'
import Button from '@mui/material/Button'
import githubIcon from '../../../Images/githubIcon2.png'
import linkedinIcon from '../../../Images/linkedinIcon2.png'
import youtubeIcon from '../../../Images/youtubeIcon2.png'


export default function MainBanner() {
  return (
    <div className={styles.MainBannerContainer}>

      <div style={{width: '60%'}}>


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

          <img className={styles.socialMediaIcon} src={githubIcon} />
          <img className={styles.socialMediaIcon} src={linkedinIcon} />
          <img className={styles.socialMediaIcon} src={youtubeIcon} />

        </div>

      </div>

      <div style={{width: "40%"}}>
        
      </div>
    </div>
  )
}
