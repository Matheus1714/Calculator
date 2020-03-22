export function inputTextAction(element){
    let inputExpression = document.getElementById("expressionText")
    inputExpression.value = element
    localStorage.setItem('expression', element)
}