const app = require('./index')
const supertest = require('supertest')
const request = supertest(app)

describe("GET /_health ", () => {
    it("It should respond with server health status", async done => {
        const response = await request.get("/_health")
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /stores/:storeId ", () => {
    it("It should return store information", async done => {
        const response = await request.get("/stores/1")
        expect(response.status).toBe(200)
        done()
    });
});

// app.post('/users/register', routes.registerUser)
// app.get('/legends/:storeId', routes.listLegendsByStoreId)
// app.get('/sections/:storeId', routes.listSectionsByStoreId)
// app.get('/items/barcode/:barcode', routes.getItemByBarcode)
// app.get('/items/section/:sectionId', routes.listItemsBySectionId)
// app.get('/items/search', routes.listItemsByKeyword)
// app.get('/item-nodes/:barcode', routes.getItemNodeByBarcode)
// app.get('/receipts/:googleId', routes.listReceiptsByGoogleId)
// app.get('/logs/:sessionId', routes.listLogsBySessionId)
// app.get('/items-test/:barcode', routes.getItemByBarcodeTest)
// app.get('/receipts/id/:googleId', routes.getCurrentReceiptIdByGoogleId)
// app.post('/receipts', routes.addReceipt)
// app.post('/receipt-items', routes.addReceiptItemByReceiptId)
// app.get('/receipt-items/:receiptId', routes.listReceiptItemsByReceiptId)
// app.get('/stats/frequency', routes.getNMostFrequentlyPurchasedItems)
// app.get('/stats/totals', routes.getPastNTotals)
// app.post('/payment', routes.makePayment)