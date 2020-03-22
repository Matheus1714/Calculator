import React, { Fragment } from 'react'
import { useStyles } from '../styles/calculatorComponentStyles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import ConsoleComponent from './consoleComponent'
import HourComponent from './hourComponent'
import ScaleCompoent from './scaleComponent'
import ScientificComponent from './scientificComponent'
import BackspaceComponent from './backspaceComponent'
import CharacterComponent from './characterComponent'
import EqualComponent from './equalComponent'
import HistoryComponent from './historyComponent'

export default function CalculatorComponent(props){
    const classes = useStyles()
    const clickHistory = localStorage.getItem('clickHistory')
    return(
        <Card className={classes.root}>
            <Grid container spacing={1}>
                <ConsoleComponent/>
                <HourComponent/>
                <ScaleCompoent/>
                <ScientificComponent/>
                <BackspaceComponent/>

                {
                    (() => {
                        if(clickHistory){
                            return(
                                <Fragment>
                                    <CharacterComponent character="7" />
                                    <CharacterComponent character="8" />
                                    <CharacterComponent character="9" />
                                    <CharacterComponent character="÷" />

                                    <CharacterComponent character="4" />
                                    <CharacterComponent character="5" />
                                    <CharacterComponent character="6" />
                                    <CharacterComponent character="x" />

                                    <CharacterComponent character="1" />
                                    <CharacterComponent character="2" />
                                    <CharacterComponent character="3" />
                                    <CharacterComponent character="-" />

                                    <CharacterComponent character="." />
                                    <CharacterComponent character="0" />
                                    <EqualComponent/>
                                    <CharacterComponent character="+" />
                                </Fragment>
                            )
                        }else{
                            return(
                                <HistoryComponent historyOperations={props.historyOperations} />
                            )
                        }
                    })()
                }
            </Grid>
        </Card>
    )
}