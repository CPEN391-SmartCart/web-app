process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const express = require("express")
const app = express()
const routes = require("./routes.js")

app.use(express.json())

app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`)
})

app.get('/_health', (req, res) => {
    res.status(200).send('Server status: healthy')
})

app.get('/stores/:storeId', routes.getStoreById)
app.get('/legends/:storeId', routes.listLegendsByStoreId)
app.get('/sections/:legendId', routes.listSectionsByLegendId)
app.get('/legends/sections/:storeId', routes.listSectionsByStoreId)
app.get('/items/:barcode', routes.getItemByBarcode)
app.get('/items/:sectionId', routes.listItemsBySectionId)
app.get('/receipts/:sessionId', routes.getReceiptBySessionId)
app.get('/receipts/:googleId', routes.listReceiptsByGoogleId)
app.get('/cart-items/:sessionId', routes.listCartItemsBySessionId)
app.get('/purchased-items/:receiptId', routes.listPurchasedItemsByReceiptId)
app.get('/logs/:sessionId', routes.listLogsBySessionId)

module.exports = app
