import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { calculateExpression } from '../api/calculateExpression'


export default function EqualComponent(){
    const handleClick = async () => {
        try{
            const resultExpression = await calculateExpression()
            localStorage.setItem('result', resultExpression)
        }catch(err){
            console.error(err)
        }
    }
    return(
        <Grid item xs={3}>
            <Button 
                variant="contained" 
                color="secondary"
                onClick={handleClick}
            >
                =
            </Button>
        </Grid>    
    )
}