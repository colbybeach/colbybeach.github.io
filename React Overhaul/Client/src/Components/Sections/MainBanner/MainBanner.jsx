import React from 'react'
import './MainBanner.css'
import Button from '@mui/material/Button'

export default function MainBanner() {
  return (
    <div id="MainBannerContainer">
      <h1>Who...Me?</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat."</p>

        
        <Button style={{backgroundColor: 'var(--main-secondary-1)'}} 
                variant="contained" href="#contact">Contact Me!</Button>
      
    </div>
  )
}
