import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function ConsoleComponent(){
    return(
        <Grid item xs={12}>
            <h1>{localStorage.getItem('expression')}</h1>
        </Grid>
    )
}