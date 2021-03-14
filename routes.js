const { pool } = require('./../config')

function getItemByBarcode(req, res){
    console.log("GET /items/{{barcode}}")

    //TODO: sanitize data
    pool.query("SELECT * FROM items WHERE barcode = $1", [req.params.barcode], function(err, result){
        if(err){
            res.status(400).send(err)
            return
        }

        res.status(200).send(result.rows)
        return
    })
}

module.exports = {getItemByBarcode}