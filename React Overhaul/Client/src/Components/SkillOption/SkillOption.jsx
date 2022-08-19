import { Card } from '@mui/material'
import React from 'react'
import styles from './skilloption.module.css'

export default function SkillOption({active, onClick, image, title, desc}) {


    function moveGradient(){
        const styles = {marginBottom: '23%'}

        if(active == 0) styles.marginBottom = '22.95%'
        if(active == 1) styles.marginBottom = '7.7%'
        if(active == 2) styles.marginBottom = '-7.6%'
        if(active == 3) styles.marginBottom = '-22.9%'
    
        return styles
    }

    return (

        <>
            <div className={styles.gradient} style={moveGradient()}/>

            <Card 
                className={styles.secondaryContainer}
                onClick={onClick}
            >
                {image}
                {title}
                {desc}
            </Card>
        </>

    )
}
