require('dotenv').config()
const { Client } = require('pg')

class HistoryOperation{
    client = new Client({
        user: process.env.USER_NAME,
        host: process.env.HOST_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.PORT_DB
    })
    constructor(){
        this.client.connect()
    }
    async getHistoryOperation(){
        try{
            const {rows} = await this.client.query('SELECT * FROM historyoperation')
            return rows
        }catch(err){
            console.error(err)
        }finally{
            this.client.end()
        }
    }
    async addExperssionOnDatabase(expression){
        try{    
            await this.client.query('INSERT INTO historyoperation (expression) VALUES ($1)', [expression])
        }catch(err){
            console.error(err)
        }finally{
            this.client.end()
        }
    }
}

module.exports = HistoryOperation