import React from 'react'
import styles from './projectpreviewbanner.module.css'

export default function ProjectPreviewBanner() {
  return (
    <div className={styles.mainBannerContainer}>

      <div>
        <div style={{marginLeft: '385px'}}>
          <h4 style={{marginTop: '50px'}}>Projects I've Worked On</h4>
        </div>
      </div>
      
      <div className={styles.gradientHalf}></div>
    </div>
  )
}
