import React from 'react'
import ExposureIcon from '@material-ui/icons/Exposure'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default function ScientificComponent(){
    return(
        <Grid item xs={3}>
            <Button>
                <ExposureIcon/>
            </Button>
        </Grid>
    )
}