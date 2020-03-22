import React from "react"
import CalculatorComponent from '../components/calculatorComponent'
import { setExpressionAction } from '../actions/setExpressionAction'
import { getHistoryOfExpression } from '../api/getHistoryOfExpressions'
import { setBoolAction } from '../actions/setBoolAction'

export default class CalculatorContainer extends React.Component{
    constructor(){
        super()
        this.state={
            historyOperations:[]
        }
    }
    async componentDidMount(){
        try{
            setExpressionAction()
            setBoolAction()
            const historyOperations = await getHistoryOfExpression()
            this.setState({
                historyOperations
            })
        }catch(err){
            console.error(err)
        }
    }
    render(){
        return(
            <div>
                <CalculatorComponent historyOperations={this.state.historyOperations} />
            </div>
        )
    }
}