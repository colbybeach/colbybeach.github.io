import { Button } from '@mui/material'
import { Drawer } from 'antd'
import React from 'react'
import styles from './navbar.module.css'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function NavBar() {

  const [drawer, setDrawer] = useState(false)


  return (
    <>
    <div className={styles.MainNavBarContainer}>
        <div className={styles.NavBarSecondaryContainer}>
            <div className={styles.NavBarLogoContainer}>
                <Button variant="text" href="#">Colby Beach</Button>          
            </div>

            <div className={styles.NavBarOtherLinksContainer}>
                <Button 
                  className={styles.buttonActive} variant="text" href="#">Home</Button>
                <Button variant="text" href="#skills">Skills</Button>
                <Button variant="text" href="#experience">Experience</Button>
                <Button className={styles.containedButton} 
                variant="contained" href="#contact">Contact</Button>
            </div>

            <Button 
              className={styles.ham}
              onClick={() => {setDrawer(!drawer)}}
            >
              <MenuOutlined style={{color: 'orange', fontSize: '20px'}}/>
            </Button>

        </div>


    </div>

    <Drawer 
      title="Colby Beach" 
      placement="right" 
      onClose={() => {setDrawer(false)}} 
      visible={drawer}
      width={"50%"}
    >
      <div className={styles.draw}>
        <Button className={styles.buttonActive} onClick={() => {setDrawer(false)}} variant="text" href="#">Home</Button>
        <Button variant="text" href="#skills" onClick={() => {setDrawer(false)}}>Skills</Button>
        <Button variant="text" href="#experience" onClick={() => {setDrawer(false)}}>Experience</Button>
        <Button className={styles.containedButton} 
        variant="contained" href="#contact" onClick={() => {setDrawer(false)}}>Contact</Button>
      </div>
    </Drawer>
    </>
  )
}
