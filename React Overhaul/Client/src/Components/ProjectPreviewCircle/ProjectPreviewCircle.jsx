import React from 'react'
import styles from './projectpreviewcircle.module.css'

export default function ProjectPreviewCircle( {image, active, link} ) {
  return (
    <div className={active ? styles.active : styles.mainCircle}>
      Hey
    </div>
  )
}
