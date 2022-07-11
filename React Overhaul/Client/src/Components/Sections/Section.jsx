import React from 'react'

export default function Section({height, color, content}) {
  return (

    <div style={{height: height, background: color}}>
        {content}
      
    </div>
  )
}
