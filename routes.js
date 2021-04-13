const { response } = require('express')
const { pool } = require('./config')
const stripe = require('stripe')(process.env.STRIPE_KEY)

/* 
 * Creates a new google account user on our database.
 * Request body expects google_id, name and email.
 */
function registerUser(req, res) {
    console.log("POST /users/register")
    pool.query("INSERT INTO users(google_id, name, email) VALUES ($1, $2, $3)", [req.body.google_id, req.body.name, req.body.email], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Gets the store information by store id.
 */
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

/*
 * Lists all the legends belonging to a store by its id.
 */
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

/*
 * Lists all the sections belonging to a store by its id.
 */
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

/*
 * Gets an item by its barcode.
 */
function getItemByBarcode(req, res) {
    console.log("GET /items/barcode/{{barcode}}")
    pool.query("SELECT * FROM items WHERE barcode = $1", [req.params.barcode], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }

        if(result.rows.length){
            res.status(200).send(result.rows[0])
        } else {
            res.status(204).send()    
        }

        return
    })
}

/*
 * Gets an item by its barcode (alternate).
 */
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

/*
 * Lists all items in a section.
 */
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

/*
 * Lists items matching a keyword.
 */
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

/*
 * Gets an items node information by barcode.
 */
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

/*
 * Lists receipts by google id.
 */
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

/*
 * Lists receipt items by receipt id.
 */
function listReceiptItemsByReceiptId(req, res) {
    console.log("GET /receipt-items/{{receiptId}}")
    pool.query("SELECT * FROM receiptsitems WHERE receipt_id = $1", [req.params.receiptId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Creates a new receipt.
 * Request body expects google_id, subtotal, gst and total.
 */
function addReceipt(req, res) {
    console.log("POST /receipts")

    pool.query("INSERT INTO receipts(google_id, subtotal, gst, total, created_at) VALUES ($1,$2,$3,$4,'NOW()')", [req.body.googleId, req.body.subTotal, req.body.gst, req.body.total], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Adds receipt items by receipt id.
 * Request body expects receipt_id, name, cost, weight and quantity.
 */
function addReceiptItemByReceiptId(req, res) {
    console.log("POST /receipt-items")

    pool.query("INSERT INTO receiptsitems(receipt_id, name, cost, weight, quantity) VALUES ($1,$2,$3,$4,$5)", [req.body.receiptId, req.body.name, req.body.cost, req.body.weight, req.body.quantity], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Gets current receipt id by google id.
 */
function getCurrentReceiptIdByGoogleId(req, res){
    console.log("GET /receipts/id/{{googleId}}")

    pool.query("SELECT DISTINCT MAX(id) FROM receipts WHERE google_id = $1", [req.params.googleId], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Lists logs by session id.
 */
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

/*
 * Gets the most frequently purchased items by google id.
 */
function getNMostFrequentlyPurchasedItems(req, res) {
    console.log("GET /stats/frequency")

    pool.query("SELECT ri.name, i.cost, SUM (ri.quantity) FROM receipts r, receiptsitems ri, items i WHERE r.id = ri.receipt_id AND ri.name = i.name AND r.google_id = $1 GROUP BY ri.name, i.cost HAVING SUM(ri.quantity) IS NOT NULL ORDER BY SUM(ri.quantity) DESC LIMIT $2", [req.query.googleId, req.query.N], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Gets past shopping session totals by google id.
 */
function getPastNTotals(req, res) {
    console.log("GET /stats/totals")

    pool.query("SELECT total FROM receipts WHERE google_id = $1 ORDER BY created_at DESC LIMIT $2", [req.query.googleId, req.query.N], function (err, result) {
        if (err) {
            res.status(400).send(err)
            return
        }
        res.status(200).send(result.rows)
        return
    })
}

/*
 * Completes a payment via stripe api.
 */
async function makePayment(req, res) {
    try {
        const amount = req.body.amount;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "cad"
        });

        res.status(200).json({ success: true, clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}

module.exports = {
    registerUser,
    getStoreById,
    listLegendsByStoreId,
    listSectionsByStoreId,
    getItemByBarcode,
    getItemNodeByBarcode,
    listItemsBySectionId,
    listItemsByKeyword,
    listReceiptsByGoogleId,
    listLogsBySessionId,
    getItemByBarcodeTest,
    makePayment,
    getCurrentReceiptIdByGoogleId,
    addReceipt,
    addReceiptItemByReceiptId,
    listReceiptItemsByReceiptId,
    getNMostFrequentlyPurchasedItems,
    getPastNTotals
}