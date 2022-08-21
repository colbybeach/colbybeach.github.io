import React from 'react'
import { Grid } from '@mui/material'

export default function Section({height, background, content, id}) {
  return (

    <div style={{height: height, background: background}} id={id}>
      <Grid container spacing={2}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
            {content}
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
    </div>
  )
}
