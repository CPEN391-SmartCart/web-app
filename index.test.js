/**
 * @jest-environment node
 */

const app = require('./index')
const supertest = require('supertest')
const axios = require('axios')
const baseUrl = 'https://cpen391-smartcart.herokuapp.com'

describe("GET /_health ", () => {
    it("It should respond with server health status", async done => {
        const response = await axios.get(baseUrl + '/_health')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /stores/:storeId ", () => {
    it("It should return store information", async done => {
        const response = await axios.get(baseUrl + '/stores/1')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /legends/:storeId ", () => {
    it("It should return store's legends information", async done => {
        const response = await axios.get(baseUrl + '/legends/1')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /sections/:storeId ", () => {
    it("It should return store's sections information", async done => {
        const response = await axios.get(baseUrl + '/sections/1')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /items/barcode/:barcode ", () => {
    it("It should return an item by barcode", async done => {
        const response = await axios.get(baseUrl + '/items/barcode/064200160001')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /items/section/:sectionId ", () => {
    it("It should return an item by section id", async done => {
        const response = await axios.get(baseUrl + '/items/section/1')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /receipts/:googleId ", () => {
    it("It should return receipts by google id", async done => {
        const response = await axios.get(baseUrl + '/receipts/a1')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /receipts/id/:googleId ", () => {
    it("It should return receipts id by google id", async done => {
        const response = await axios.get(baseUrl + '/receipts/id/a1')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /receipt-items/:receiptId ", () => {
    it("It should return receipt items by receipt id", async done => {
        const response = await axios.get(baseUrl + '/receipt-items/68')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /stats/frequency ", () => {
    it("It should return frequency stats for a user by google id", async done => {
        const response = await axios.get(baseUrl + '/stats/frequency?googleId=114110647082982528530&N=5')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /stats/totals ", () => {
    it("It should return total stats for a user by google id", async done => {
        const response = await axios.get(baseUrl + '/stats/totals?googleId=114110647082982528530&N=5')
        expect(response.status).toBe(200)
        done()
    });
});

describe("GET /items/search?keyword=onion", () => {
    it("It should return items searched for by a keyword", async done => {
        const response = await axios.get(baseUrl + '/items/search?keyword=onion')
        expect(response.status).toBe(200)
        done()
    });
});

describe("POST /users/register", () => {
    it("It should create a new user", async done => {
        const response = await axios.post(baseUrl + '/users/register', {
            "google_id" : "test" + (Math.random() + 1) * 10000,
            "name": "test" + (Math.random() + 1) * 10000,
            "email": "test" + (Math.random() + 1) * 10000 + "@gmail.com"
        })

        expect(response.status).toBe(200)
        done()
    });
});

describe("POST /receipts", () => {
    it("It should create a new user", async done => {
        const response = await axios.post(baseUrl + '/receipts', {
            "googleId" : "113555016600764197718",
            "subTotal" : 12.5,
            "gst" : 1,
            "total" : "14.5"
        })

        expect(response.status).toBe(200)
        done()
    });
});

describe("POST /receipt-items", () => {
    it("It should create a new user", async done => {
        const response = await axios.post(baseUrl + '/receipt-items', {
            "receiptId" : "86",
            "name" : "Straws",
            "cost" : 4.50,
            "weight" : 0.25
        })

        expect(response.status).toBe(200)
        done()
    });
});
