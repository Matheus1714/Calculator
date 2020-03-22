import React from 'react'
import Grid from '@material-ui/core/Grid'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import Button from '@material-ui/core/Button'

export default function HourComponent(){
    return(
        <Grid item xs={3}>
            <Button>
                <QueryBuilderIcon/>
            </Button>
        </Grid>
    )
}