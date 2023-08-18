import React from 'react'
import { useState } from 'react'
import ProjectPreviewCircle from '../../ProjectPreviewCircle/ProjectPreviewCircle'
import styles from './projectpreviewbanner.module.css'
import fp from '../../../Images/fplogo.png'
import ct from '../../../Images/CardTrapIcon.jpg'
import wc from '../../../Images/WordCountIcon.png'
import lo from '../../../Images/logicoslogo.png'

export default function ProjectPreviewBanner() {

  const [prevActive, setPrevActive] = useState(2)


  return (
    <div className={styles.mainBannerContainer}>

    
      <div className={styles.contentContainer}>
        <h4 style={{marginTop: '30px'}}>POPULAR PROJECTS I'VE WORKED ON</h4>
        <div className={styles.circleRow}>

          <ProjectPreviewCircle 
            active={prevActive === 0}
            setEnter={() => setPrevActive(0)}
            setLeave={() => setPrevActive(2)}
            image={<img src={lo}/>}
            link={"https://logic-os.com/"}
          />
           <ProjectPreviewCircle 
            active={prevActive === 1}
            setEnter={() => setPrevActive(1)}
            setLeave={() => setPrevActive(2)}
            image={<img src={ct}/>}
            link={"https://github.com/clawplusstacker/CardTrap"}
          />
           <ProjectPreviewCircle 
            active={prevActive === 2}
            setEnter={() => setPrevActive(2)}
            setLeave={() => setPrevActive(2)}
            image={<img src={fp}/>}
            link={"https://flickpick.tech/"}
          />
           <ProjectPreviewCircle 
            active={prevActive === 3}
            setEnter={() => setPrevActive(3)}
            setLeave={() => setPrevActive(2)}
            image={<img src={wc}/>}
            link={"https://github.com/clawplusstacker/Chrome-Word-Count-Extension"}
          />

        </div>        
      </div>
      
      <div className={styles.gradientHalf}>
        
      </div>
    </div>
  )
}
