process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const express = require("express")
const app = express()
const sql = require("./config.js")
const routes = require("./routes.js")
const { pool } = require('./config')

app.use(express.json())

app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`)
})

app.get('/_health', (req, res) => {
    res.status(200).send('Server status: healthy')
})

app.get('/items/:barcode', routes.getItemByBarcode)

module.exports = app
