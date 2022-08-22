import { Carousel } from 'antd'
import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard'
import styles from './projectsection.module.css'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

export default function ProjectSection() {


    return (
        <div className={styles.mainBannerContainer}>

            <h1 className={styles.header}>Personal Projects</h1>

            <div className={styles.projectRow}>


                <Carousel 
                    className={styles.car} 
                    arrows 
                    prevArrow={<ArrowLeftOutlined />}
                    nextArrow={<ArrowRightOutlined />}
                >

                    
                    <div className={styles.carRow}>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className={styles.carRow}>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className={styles.carRow}>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>

                </Carousel>

   
            

            </div>
        
        </div>
    )
}
