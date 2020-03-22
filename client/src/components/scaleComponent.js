import React from 'react'
import Grid from '@material-ui/core/Grid'
import LinearScaleIcon from '@material-ui/icons/LinearScale'
import Button from '@material-ui/core/Button'

export default function ScaleComponent(){
    return(
        <Grid item xs={3}>
            <Button>
                <LinearScaleIcon/>
            </Button>
        </Grid>
    )
}