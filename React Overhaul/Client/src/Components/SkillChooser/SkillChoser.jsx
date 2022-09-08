import React, { useState } from 'react'
import SkillOption from '../SkillOption/SkillOption'
import styles from './skillchoser.module.css'
import githubIcon from '../../Images/githubIcon.png'


export default function SkillChoser({whatActive, setActive}) {


    return (

        <div className={styles.mainContainer}>

            <SkillOption 
                active={whatActive}
                onClick={() => setActive(0)}
                image={<img src={githubIcon}/>}
                title={"Languages"}
                desc={"The languages I have used throughout my carrer."}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(1)}
                image={<img src={githubIcon}/>}
                title={"Web & Database"}
                desc={"Different web and database tools I have used."}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(2)}
                image={<img src={githubIcon}/>}
                title={"Frameworks"}
                desc={"Frameworks I know and used within a real project setting."}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(3)}
                image={<img src={githubIcon}/>}
                title={"Technologies"}
                desc={"Different applications I use to help create awesome things :)"}
            />

        </div>

    )
}
