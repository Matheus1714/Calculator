class CalculateExpression{
    expression = ''
    stackOfNumbers = []
    stackOfOperators = []
    constructor(expression){
        this.expression = expression
    }
    operationEntersNumbers(number1, operation, number2){
        switch(operation){
            case '+':
                return number1 + number2
            case '-':
                return number1 - number2
            case '*':
                return number1 * number2
            case '/':
                return number1 / number2
            default:
                return null
        }
    }
    resultExpression(){
        let i = 0
        let j = 0
        let number1 = 0
        let number2 = 0
        let operation = ''
        let result = 0
        const expression = this.expression

        for(i = 0; i < expression.length; i++){
            if(
                expression[i] == '+' | 
                expression[i] == '-' |
                expression[i] == '*' |
                expression[i] == '/' |
                expression[i] == '(' 
            ){
                this.stackOfOperators.push(expression[i])
            }else if(expression[i] > '0' && expression[i] < '9'){
                this.stackOfNumbers.push(Number(expression[i]))
            }else if(expression[i] == ')'){
                for(j = this.stackOfOperators.length - 1; this.stackOfOperators[j] != '('; j--){
                    number2 = this.stackOfNumbers.pop()
                    number1 = this.stackOfNumbers.pop()
                    operation = this.stackOfOperators.pop()
                    result = this.operationEntersNumbers(number1, operation, number2)
                    this.stackOfNumbers.push(result)
                }
                this.stackOfOperators.pop()
            }
        }
        if(this.stackOfOperators.length != 0){
            for(j = this.stackOfOperators.length - 1; j >= 0; j--){
                number2 = this.stackOfNumbers.pop()
                number1 = this.stackOfNumbers.pop()
                operation = this.stackOfOperators.pop()
                result = this.operationEntersNumbers(number1, operation, number2)
                this.stackOfNumbers.push(result)
            }
        }
        return result
    }
}

module.exports = CalculateExpression