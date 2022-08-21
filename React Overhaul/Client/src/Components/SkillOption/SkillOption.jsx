import { Card } from '@mui/material'
import React from 'react'
import styles from './skilloption.module.css'

export default function SkillOption({active, onClick, image, title, desc}) {


    function moveGradient(){
        const styles = {marginBottom: '23%'}

        if(active == 0) styles.marginBottom = '420px'
        if(active == 1) styles.marginBottom = '140px'
        if(active == 2) styles.marginBottom = '-140px'
        if(active == 3) styles.marginBottom = '-420px'
    
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
