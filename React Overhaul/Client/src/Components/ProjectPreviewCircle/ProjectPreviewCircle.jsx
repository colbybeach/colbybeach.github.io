import React from 'react'
import styles from './projectpreviewcircle.module.css'

export default function ProjectPreviewCircle( {image, active, link, setEnter, setLeave} ) {
  return (

    <div 
      className={active ? styles.active : styles.mainCircle}
      onMouseEnter={setEnter}
      onMouseLeave={setLeave}
    >
      Hey
    </div>

  )
}
