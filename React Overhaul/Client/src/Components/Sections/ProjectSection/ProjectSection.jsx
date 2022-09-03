import { Carousel } from 'antd'
import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard'
import styles from './projectsection.module.css'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import fp from '../../../Images/fplogo.png'


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
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />                        
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />                    
                    </div>
                    <div className={styles.carRow}>
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />                        
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />                    
                    </div>
                    <div className={styles.carRow}>
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />                        
                        <ProjectCard 
                            image={<img src={fp}/>}
                            title={"FlickPick"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />                    
                    </div>

                </Carousel>
   
            </div>     
        </div>
    )
}
