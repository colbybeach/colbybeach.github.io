import React from 'react'
import styles from './experiencesection.module.css'
import { Carousel } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ExpChooser from '../../ExpChooser/ExpChooser'
import { useState } from 'react'
import github from '../../../Images/githubIcon.png'

import jg1 from '../../../Images/jg1.jpg'
import jg2 from '../../../Images/jg2.jpeg'
import jg3 from '../../../Images/jg3.jpeg'
import sms1 from '../../../Images/sms1.jpg'
import icomputer1 from '../../../Images/icomputer1.jpg'


export default function ExperienceSection() {

  const [active, setActive] = useState(0)

  function moveGrad(){
    if(active == 0){
      return {
        marginRight : '70%',
      }
    }else if (active == 2){
      return {
        marginLeft : '70%',
      }
    }else return {}
  }

  const data = [
    {
      name: "Jahnel Group",
      dates: "June 2022 - August 2022",
      description:
        <p>

          Full-time intern at the software consulting firm, 
          Jahnel Group Inc, in Schenectady, New York, for the 2022 summer.
          <ul>
            <br/>
            <li>
                I built all admin and CRUD functionality into an internal employee tracking application using the GRAND
                stack (GraphQL, ReactJS, Apollo, and Neo4j).
            </li>
            <br/>
            <li>
              I researched and implemented a service that would allow our client to use biometric information to login to their platform
              and access various AWS services using ReactJS, KeyCloak, WebAuthn, AWS Cognito, and more.
            </li>
          </ul>
        </p>,
      skills: 
        <>
          <p>HTML, CSS, Javascript, React, Node, Express</p>
          <p>Neo4j, GraohQL, WebAuthn, Auth0, Firebase, AWS</p>
        </>,
      images: [<img src={jg1}/>, <img src={jg2}/>, <img src={jg3}/>]
    },
    {
      name: "iComputers",
      dates: "August 2020 - September 2022",
      description: 
        <p>Founded company that buys and sells used computers
           on various e-commerce websites such as eBay and Facebook Marketplace.
        </p>,
      skills: [],
      images: [<img src={icomputer1}/>]
    },
    {
      name: "St. Mary's School",
      dates: "August 2020 - Present",
      description: <p>

        Resolves IT related problems, including internet issues, 
        desktop issues, printers, and smart boards to support operational 
        efficiency.

      </p>,
      skills: [],
      images: [<img src={sms1}/>]
    }
  ]


  return (
    <div className={styles.mainBannerContainer}>

      <div className={styles.chosenContainer}>

        <div className={styles.chosenText}>

          <div>
          <h1>Experience</h1>
          <h2>{data[active].name} ({data[active].dates})</h2>
          </div>
            {data[active].description}
          <div>
          <h3>Skills Used:</h3>
            {data[active].skills}
          </div>

        </div>

        <Carousel 
              className={styles.car} 
              arrows 
              prevArrow={<ArrowLeftOutlined />}
              nextArrow={<ArrowRightOutlined />}
          >

            {data[active].images}

          </Carousel>

        </div>

        <div className={styles.expRow}>

          <div className={styles.gradient} style={moveGrad()}/>

          <ExpChooser 
            style={{marginRight: '70%'}} 
            onClick={() => setActive(0)}
            title={"Jahnel Group"}
            image={<img src={github}/>}
          />

          <ExpChooser 
            onClick={() => setActive(1)}
            title={"iComputers"}
            image={<img src={github}/>}
          />


          <ExpChooser 
            style={{marginLeft: '70%'}} 
            onClick={() => setActive(2)}
            title={"St. Mary's School"}
            image={<img src={github}/>}
          />

        </div>

    </div>
  )
}
