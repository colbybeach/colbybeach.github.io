import { Button } from '@mui/material'
import React from 'react'
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={styles.MainNavBarContainer}>
        <div className={styles.NavBarSecondaryContainer}>
            <div className={styles.NavBarLogoContainer}>
                <Button variant="text" href="#">Colby Beach</Button>          
            </div>

            <div className={styles.NavBarOtherLinksContainer}>
                <Button className={styles.buttonActive} variant="text" href="#">Home</Button>
                <Button variant="text" href="#skills">Skills</Button>
                <Button variant="text" href="#experience">Experience</Button>
                <Button className={styles.containedButton} 
                variant="contained" href="#contact">Contact</Button>
            </div>

        </div>
    </div>
  )
}
