import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function HistoryComponent(props){
    const data = props.historyOperations
    const listHistory = () => {
        console.log(data)
        return data.map((element) => {
            return(
                <h3 key={element.idhistoryoperation} >{ element.expression }</h3>
            )
        })
    }
    return(
        <Grid item xs={12}>
            {
                listHistory()
            }
        </Grid>    
    )
}