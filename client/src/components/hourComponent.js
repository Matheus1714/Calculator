import React from 'react'
import Grid from '@material-ui/core/Grid'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import Button from '@material-ui/core/Button'

export default function HourComponent(){
    const handleClick = async () => {
        try{
            let clickHistory = JSON.parse(localStorage.getItem('clickHistory'))
            localStorage.setItem('clickHistory', !clickHistory)
            window.location.reload()
        }catch(err){
            console.error(err)
        }
    }
    return(
        <Grid item xs={3}>
            <Button
                onClick={handleClick}
            >
                <QueryBuilderIcon/>
            </Button>
        </Grid>
    )
}