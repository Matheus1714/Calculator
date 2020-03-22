export async function getHistoryOfExpression(){
    try{
        const response = await fetch('http://localhost:8000/history', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const historyElements =  await response.json()
        return historyElements
    }catch(err){
        console.error(err)
    }
}