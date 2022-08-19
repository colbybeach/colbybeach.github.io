import { Card } from '@mui/material'
import React from 'react'
import styles from './skillshowcasecontainer.module.css'

export default function SkillShowcaseContainer() {



    return (

        <Card className={styles.mainContainer}>

            <h2 className={styles.head}>Skills I Have Knowledege In</h2>
            <div className={styles.skillRow}></div>
            <h2 className={styles.head}>Skills I Am Proficient In</h2>
            <div className={styles.skillRow}></div>
            <h2 className={styles.head}>Skills I Can Lead/Teach In</h2>
            <div className={styles.skillRow}></div>


        </Card>

    )
}
