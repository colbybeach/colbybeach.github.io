import React from 'react'
import styles from './projectcard.module.css'
import { Col, Row } from 'antd';


export default function ProjectCard( {image, title, description, languages} ) {

    return (


        <div className={styles.mainContainer}>

            <Row>
                <Col span={3}/>
                <Col item xs={18}>

                    {image}
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Col>
                <Col span={3}/>
            </Row>

        </div>


    )


}
