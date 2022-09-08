import React from 'react'
import styles from './skillshowcasecontainer.module.css'

export default function SkillShowcaseContainer({data}) {



    return (

        <div className={styles.mainContainer}>

            <h2 className={styles.head}>Skills I Have Worked With</h2>
            <div className={styles.skillRow}>

                {data.worked.map((skill) => (
                    <img src={skill}/>
                ))}

            </div>

            <h2 className={styles.head}>Skills I Am Proficient In</h2>
            <div className={styles.skillRow}>
                {data.proficient.map((skill) => (
                    <img src={skill}/>
                ))}
            </div>
            
            <h2 className={styles.head}>Skills I Can Lead/Teach In</h2>
            <div className={styles.skillRow}>
                {data.lead.map((skill) => (
                    <img src={skill}/>
                ))}
            </div>

        </div>

    )
}
