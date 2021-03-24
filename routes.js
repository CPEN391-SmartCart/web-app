const { response } = require('express')
const { pool } = require('./config')

function getStoreById(req, res) {
    console.log("GET /stores/{{storeId}}")
    pool.query("SELECT * FROM stores WHERE id = $1", [req.params.storeId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows[0])
        return
    })
}

function listLegendsByStoreId(req, res) {
    console.log("GET /legends/{{storeId}}")
    pool.query("SELECT * FROM legends WHERE store_id = $1", [req.params.storeId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function listSectionsByLegendId(req, res) {
    console.log("GET /sections/{{legendId}}")
    pool.query("SELECT * FROM sections WHERE legend_id = $1", [req.params.legendId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function getItemByBarcode(req, res) {
    console.log("GET /items/{{barcode}}")
    pool.query("SELECT * FROM items WHERE barcode = $1", [req.params.barcode], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows[0])
        return
    })
}

function listItemsBySectionId(req, res) {
    console.log("GET /items/{{sectionId}}")
    pool.query("SELECT * FROM items WHERE section_id = $1", [req.params.sectionId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })

}

function getReceiptBySessionId(req, res) {
    console.log("GET /receipts/{{sessionId}}")
    pool.query("SELECT * FROM receipts WHERE session_id = $1", [req.params.sessionId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows[0])
        return
    })

}

function listReceiptsByGoogleId(req, res) {
    console.log("GET /receipts/{{googleId}}")
    pool.query("SELECT * FROM receipts WHERE google_id = $1", [req.params.googleId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function addReceipt(req, res) {
    console.log("POST /receipts")

}

function updateReceipt(req, res) {
    console.log("PUT /receipts")

}

function addSession(req, res) {
    console.log("POST /sessions")

}

function updateSession(req, res) {
    console.log("PUT /sessions")

}

function listCartItemsBySessionId(req, res) {
    console.log("GET /cart-items/{{sessionId}}")
    pool.query("SELECT * FROM cartItems WHERE session_id = $1", [req.params.sessionId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function addCartItemBySessionId(req, res) {
    console.log("POST /cart-items")

}

function removeCartItemBySessionIdAndBarcode(req, res) {
    console.log("DELETE /cart-items")

}

function updateCartItemBySessionIdAndBarcode(req, res) {
    console.log("PUT /cart-items")

}

function listPurchasedItemsByReceiptId(req, res) {
    console.log("GET /purchased-items/{{receiptId}}")
    pool.query("SELECT * FROM purchasedItems WHERE receipt_id = $1", [req.params.receiptId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function addPurchasedItemByReceiptId(req, res) {
    console.log("POST /purchased-items")

}

function addLogsBySessionId(req, res) {
    console.log("POST /logs")

}

function listLogsBySessionId(req, res) {
    console.log("GET /logs/{{sessionId}}")
    pool.query("SELECT * FROM logs WHERE session_id = $1", [req.params.sessionId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

// Data sanitization functions 
function checkString(dataIn) {
    return false
}

function checkInt(dataIn) {
    return false
}

function checkFloat(dataIn) {
    return false
}


module.exports = { 
    getStoreById, 
    listLegendsByStoreId,
    listSectionsByLegendId,
    getItemByBarcode,
    listItemsBySectionId,
    getReceiptBySessionId,
    listReceiptsByGoogleId,
    listCartItemsBySessionId,
    listPurchasedItemsByReceiptId,
    listLogsBySessionId
}