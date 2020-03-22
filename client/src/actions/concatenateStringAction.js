import { inputTextAction } from './inputTextAction'

export function concatenateStringAction(character){
    let oldExpression = localStorage.getItem('expression')
    let newExpression = oldExpression + character

    localStorage.setItem('expression', newExpression)

    inputTextAction(newExpression)
}