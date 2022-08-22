import React from 'react'
import styles from './expchooser.module.css'

export default function ExpChooser({active}) {

    active = 0;

    function moveGradient(){
        // const styles = {marginBottom: '23%'}

        // if(active == 0) styles.marginBottom = '10px'
        // if(active == 1) styles.marginBottom = '140px'
        // if(active == 2) styles.marginBottom = '-140px'
        // if(active == 3) styles.marginBottom = '-420px'
    
        // return styles
    }

    return (

        <>

            <div className={styles.gradient} style={moveGradient()}/>


            <div className={styles.mainContainer}>


            </div>
        </>

    )


}
