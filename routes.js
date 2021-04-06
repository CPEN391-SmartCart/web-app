const { response } = require('express')
const { pool } = require('./config')
const Stripe = require('stripe')
const stripe = new Stripe(process.env.STRIPE_KEY)

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

function listSectionsByStoreId(req, res) {
    console.log("GET /sections/{{storeId}}")
    pool.query("SELECT s.x, s.y, s.width, s.height, l.colour FROM sections s inner join legends l ON s.legend_id=l.id AND store_id = $1", [req.params.storeId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}


function getItemByBarcodeTest(req, res) {
    console.log("GET /items/{{barcode}}")
    pool.query("SELECT i.* , l.colour FROM items i inner join sections s ON i.section_id = s.id AND barcode = $1 inner join legends l on s.legend_id = l.id ", [req.params.barcode], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows[0])
        return
    })
}


function getItemByBarcode(req, res) {
    console.log("GET /items/barcode/{{barcode}}")
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
    console.log("GET /items/section/{{sectionId}}")
    pool.query("SELECT * FROM items WHERE section_id = $1", [req.params.sectionId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function listItemsByKeyword(req, res) {
    console.log("GET /items/search?keyword=}")

    var keyword = '%' + req.query.keyword + '%'
    console.log(keyword)

    pool.query("SELECT * FROM items WHERE LOWER(name) like LOWER($1)", [keyword], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

function getItemNodeByBarcode(req, res) {
    console.log("GET /item-nodes/{{barcode}}")
    var query = "SELECT x, y, node_id, parent_node_id, current_cost, \n" +
    "child_one_id, distance_child_one, child_two_id, distance_child_two, \n" +
    "child_three_id, distance_child_three, child_four_id, distance_child_four, \n" +
    "child_five_id, distance_child_five, child_six_id, distance_child_six \n" +
    "FROM items i, itemnodes n WHERE i.barcode = n.barcode AND i.barcode = $1";

    pool.query(query, [req.params.barcode], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows[0])
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

// Payment functions
function makePayment(req, res) {
    try {
        // customer_id = cus_J0g8gEb9yZAmJL
        // payment_source_id = card_1IPGCrF8GwWH2Z4EE9FQYYFN
        const {amount, customerId, paymentSourceId} = req.params;
        const charge = stripe.charges.create({
            amount: amount,
            currency: "CAD",
            customer: customerId,
            source: paymentSourceId,
            description: "SmartCart"
        })

        res.status(200).json({ success: true , charge: charge});
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
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
    listSectionsByStoreId,
    getItemByBarcode,
    getItemNodeByBarcode,
    listItemsBySectionId,
    listItemsByKeyword,
    getReceiptBySessionId,
    listReceiptsByGoogleId,
    listCartItemsBySessionId,
    listPurchasedItemsByReceiptId,
    listLogsBySessionId,
    getItemByBarcodeTest,
    makePayment
}