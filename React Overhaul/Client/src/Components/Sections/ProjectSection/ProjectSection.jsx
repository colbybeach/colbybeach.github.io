import { Carousel } from 'antd'
import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard'
import styles from './projectsection.module.css'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import fp from '../../../Images/fplogo.png'
import ct from '../../../Images/CardTrapIcon.jpg'
import wc from '../../../Images/WordCountIcon.png'


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
                    autoplay={true}
                >

                    
                    <div className={styles.carRow}>
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"iOS app that lets two or more users match on what movies they would want to watch from various different streaming services."}
                        />
                        <ProjectCard 
                            image={<img src={ct}/>}
                            title={"CardTrap"}
                            description={"iOS magic trick app that lets the magician throw a card into his phone and reveal it."}
                        />                        
                        <ProjectCard 
                            image={<img src={wc}/>}
                            title={"Word Count"}
                            description={"Chrome extension that will allow the user to highlight text and see how many words and characters there are."}
                        />                    
                    </div>
                    <div className={styles.carRow}>
                        <ProjectCard 
                            image={<img src={""}/>}
                            title={"Watch Me"}
                            description={"New App/Website for tracking fitness progress and keeping yourself accountable."}
                        />
                        <ProjectCard 
                            image={<img src={""}/>}
                            title={"Personal Website"}
                            description={"The website you are currently on :)"}
                        />  
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick Website"}
                            description={"The website for all things FlickPick related :)"}
                        />                                         
                    </div>

                </Carousel>
   
            </div>     
        </div>
    )
}
