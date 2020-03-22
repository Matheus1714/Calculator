export async function addExpressionOnHistory(){
    try{
        const expression = localStorage.getItem('expression')
        await fetch('http://localhost:8000/add', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'expression':expression
            })
        })
    }catch(err){
        console.error(err)
    }
}