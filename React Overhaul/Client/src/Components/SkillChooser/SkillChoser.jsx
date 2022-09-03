import React, { useState } from 'react'
import SkillOption from '../SkillOption/SkillOption'
import styles from './skillchoser.module.css'
import githubIcon from '../../Images/githubIcon.png'


export default function SkillChoser() {

    const [whatActive, setActive] = useState(0);

    return (

        <div className={styles.mainContainer}>

            <SkillOption 
                active={whatActive}
                onClick={() => setActive(0)}
                image={<img src={githubIcon}/>}
                title={"Languages"}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(1)}
                image={<img src={githubIcon}/>}
                title={"Web & Database"}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(2)}
                image={<img src={githubIcon}/>}
                title={"Frameworks"}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(3)}
                image={<img src={githubIcon}/>}
                title={"Technologies"}
            />

        </div>

    )
}
