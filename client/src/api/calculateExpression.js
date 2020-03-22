export async function calculateExpression(){
    try{
        const expression = localStorage.getItem('expression')
        const response = await fetch('http://localhost:8000/result', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'expression':expression
            })
        })
        const resultJSON =  await response.json()
        return resultJSON.result
    }catch(err){
        console.error(err)
    }
}