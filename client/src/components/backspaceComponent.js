import React from 'react'
import Grid from '@material-ui/core/Grid'
import BackspaceIcon from '@material-ui/icons/Backspace'
import Button from '@material-ui/core/Button'
import { removeLastElement } from '../actions/removeLastElement'

export default function BackspaceComponent(){
    const handleClick = async () => {
        try{
            removeLastElement()
        }catch(err){    
            console.error(err)
        }
    }
    return(
        <Grid item xs={3}>
            <Button
                onClick={() => handleClick()}
            >
                <BackspaceIcon/>
            </Button>
        </Grid>
    )
}