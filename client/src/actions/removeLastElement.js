import { inputTextAction } from './inputTextAction'

export function removeLastElement(){
    let expression = localStorage.getItem('expression')
    let newExpression = expression.substring(0, (expression.length - 1))
    inputTextAction(newExpression)
}