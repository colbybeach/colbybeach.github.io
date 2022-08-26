import React from 'react'
import { useState } from 'react'
import ProjectPreviewCircle from '../../ProjectPreviewCircle/ProjectPreviewCircle'
import styles from './projectpreviewbanner.module.css'

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
          />
           <ProjectPreviewCircle 
            active={prevActive === 1}
            setEnter={() => setPrevActive(1)}
            setLeave={() => setPrevActive(2)}
          />
           <ProjectPreviewCircle 
            active={prevActive === 2}
            setEnter={() => setPrevActive(2)}
            setLeave={() => setPrevActive(2)}
          />
           <ProjectPreviewCircle 
            active={prevActive === 3}
            setEnter={() => setPrevActive(3)}
            setLeave={() => setPrevActive(2)}
          />

        </div>        
      </div>
      
      <div className={styles.gradientHalf}>
        
      </div>
    </div>
  )
}
