import React from 'react'
import SkillChoser from '../../SkillChooser/SkillChoser'
import SkillShowcaseContainer from '../../SkillShowcaseContainer/SkillShowcaseContainer'
import styles from './skillssection.module.css'


export default function SkillsSection() {


    return (

        <div className={styles.mainBannerContainer}>

            <SkillChoser />
            <SkillShowcaseContainer />


            
        </div>

    )

}
