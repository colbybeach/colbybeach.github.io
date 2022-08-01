import React from 'react'
import ProjectPreviewCircle from '../../ProjectPreviewCircle/ProjectPreviewCircle'
import styles from './projectpreviewbanner.module.css'

export default function ProjectPreviewBanner() {
  return (
    <div className={styles.mainBannerContainer}>

    
      <div className={styles.contentContainer}>
        <h4 style={{marginTop: '30px'}}>Projects I've Worked On</h4>
        <div className={styles.circleRow}>
          <ProjectPreviewCircle/>
          <ProjectPreviewCircle/>
          <ProjectPreviewCircle/>
          <ProjectPreviewCircle/>
        </div>        
      </div>
      
      <div className={styles.gradientHalf}></div>
    </div>
  )
}
