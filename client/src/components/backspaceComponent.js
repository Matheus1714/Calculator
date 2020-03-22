import React from 'react'
import Grid from '@material-ui/core/Grid'
import BackspaceIcon from '@material-ui/icons/Backspace'
import Button from '@material-ui/core/Button'

export default function BackspaceComponent(){
    return(
        <Grid item xs={3}>
            <Button>
                <BackspaceIcon/>
            </Button>
        </Grid>
    )
}