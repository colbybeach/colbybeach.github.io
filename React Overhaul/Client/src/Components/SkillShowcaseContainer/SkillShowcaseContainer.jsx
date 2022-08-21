import React from 'react'
import styles from './skillshowcasecontainer.module.css'

export default function SkillShowcaseContainer() {



    return (

        <div className={styles.mainContainer}>

            <h2 className={styles.head}>Skills I Have Worked With</h2>
            <div className={styles.skillRow}></div>

            <h2 className={styles.head}>Skills I Am Proficient In</h2>
            <div className={styles.skillRow}></div>
            
            <h2 className={styles.head}>Skills I Can Lead/Teach In</h2>
            <div className={styles.skillRow}></div>

        </div>

    )
}
