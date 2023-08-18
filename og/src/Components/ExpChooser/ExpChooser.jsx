import React from 'react'
import styles from './expchooser.module.css'

export default function ExpChooser({onClick, style, title, image}) {




    return (

        <>



            <div className={styles.mainContainer} onClick={onClick} style={style}>
                {image}
                {title}
            </div>
        </>

    )


}
