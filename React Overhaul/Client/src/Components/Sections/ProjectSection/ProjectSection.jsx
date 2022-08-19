import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard'
import styles from './projectsection.module.css'

export default function ProjectSection() {
    return (
        <div className={styles.mainBannerContainer}>

            <h1 className={styles.header}>Personal Projects</h1>

            <div className={styles.projectRow}>


                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </div>
        
        </div>
    )
}
