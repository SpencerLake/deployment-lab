const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('client'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 4500

app.listen(port, () => {
    console.log(`Up and running on: ${port}`)
})