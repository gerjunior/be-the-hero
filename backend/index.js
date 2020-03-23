const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send(JSON.stringify('Hello, World!'))
})

app.listen(3333, () => {
    console.log("App listening on port 3333!")
})