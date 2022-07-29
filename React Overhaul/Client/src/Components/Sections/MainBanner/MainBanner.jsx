import React from 'react'
import styles from './mainbanner.module.css'
import Button from '@mui/material/Button'

export default function MainBanner() {
  return (
    <div className={styles.MainBannerContainer}>

      <div style={{width: '30%'}}>


        <h1 className={styles.bannerTitle}>Who...Me?</h1>

        <p className={styles.bannerBio}>
          "Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat."
        </p>


        <Button className={styles.contactButton} 
                variant="contained" href="#contact">Contact Me!</Button>
      </div>

      <div style={{width: "30%"}}>
        
      </div>
    </div>
  )
}
