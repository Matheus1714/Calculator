import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';

export default function ConsoleComponent(){
    return(
        <Grid item xs={12}>
            <TextField id="expressionText" />
        </Grid>
    )
}