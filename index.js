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

app.post('/users/register', routes.registerUser)
app.get('/stores/:storeId', routes.getStoreById)
app.get('/legends/:storeId', routes.listLegendsByStoreId)
app.get('/sections/:storeId', routes.listSectionsByStoreId)
app.get('/items/barcode/:barcode', routes.getItemByBarcode)
app.get('/items/section/:sectionId', routes.listItemsBySectionId)
app.get('/items/search', routes.listItemsByKeyword)
app.get('/item-nodes/:barcode', routes.getItemNodeByBarcode)
app.get('/receipts/:googleId', routes.listReceiptsByGoogleId)
app.get('/logs/:sessionId', routes.listLogsBySessionId)
app.get('/items-test/:barcode', routes.getItemByBarcodeTest)
app.get('/receipts/id/:googleId', routes.getCurrentReceiptIdByGoogleId)
app.post('/receipts', routes.addReceipt)
app.post('/receipt-items', routes.addReceiptItemByReceiptId)
app.get('/receipt-items/:receiptId', routes.listReceiptItemsByReceiptId)
app.get('/stats/frequency/:googleId&:N', routes.getNMostFrequentlyPurchasedItems)
app.get('/stats/totals/:googleId&:N', routes.getPastNTotals)
app.post('/payment/:amount&:customerId&:paymentSourceId', routes.makePayment)

module.exports = app
