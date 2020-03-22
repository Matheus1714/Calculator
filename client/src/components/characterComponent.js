import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { concatenateStringAction } from '../actions/concatenateStringAction'

export default function CharacterComponent(props){
    const { character } = props
    return(
        <Grid item xs={3}>
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => concatenateStringAction(character)}
            >
                { character }
            </Button>
        </Grid>        
    )
}