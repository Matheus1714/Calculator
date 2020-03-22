import React from "react"
import CalculatorComponent from '../components/calculatorComponent'
import { setExpressionAction } from '../actions/setExpressionAction'

export default class CalculatorContainer extends React.Component{
    constructor(){
        super()
        this.state={
            expression:""
        }
    }
    async componentDidMount(){
        try{
            setExpressionAction()
            const expression = localStorage.getItem('expression')
            this.setState({
                expression
            })
        }catch(err){
            console.error(err)
        }
    }
    render(){
        return(
            <div>
                <CalculatorComponent />
            </div>
        )
    }
}