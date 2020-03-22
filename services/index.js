const app = require('./routes')
const port = process.env.PORT | 8080

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})