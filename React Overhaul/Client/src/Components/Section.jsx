import React from 'react'

export default function Section({height, background, content, id}) {
  return (

    <div style={{height: height, background: background}} id={id}>
        {content}
      
    </div>
  )
}
