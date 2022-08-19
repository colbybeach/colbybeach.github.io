import React, { useState } from 'react'
import SkillOption from '../SkillOption/SkillOption'
import styles from './skillchoser.module.css'
import { Card } from '@mui/material'


export default function SkillChoser() {

    const [whatActive, setActive] = useState(0);

    return (

        <Card className={styles.mainContainer}>

            <SkillOption 
                active={whatActive}
                onClick={() => setActive(0)}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(1)}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(2)}
            />
            <SkillOption 
                active={whatActive}
                onClick={() => setActive(3)}
            />

        </Card>

    )
}
