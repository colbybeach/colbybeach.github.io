import { Button } from '@mui/material'
import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div id="MainNavBarContainer">

        <div id="NavBarSecondaryContainer">

            <div id="NavBar-LogoContainer">
                <Button variant="text" href="#">Colby Beach</Button>          
            </div>

            <div id="NavBar-OtherLinksContainer">
                <Button className='buttonActive' variant="text" href="#">Home</Button>
                <Button variant="text" href="#skills">Skills</Button>
                <Button variant="text" href="#experience">Experience</Button>
                <Button className='containedButton' 
                variant="contained" href="#contact">Contact</Button>
            </div>

        </div>
    </div>
  )
}
