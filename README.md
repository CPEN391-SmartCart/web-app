# Web App

This repository contains Node JS code for our REST API that interfaces with a Postgres database. Both of these are hosted on a Heroku Cloud Server.

Currently we support the following endpoints:

POST /users/register
GET /stores/:storeId
GET /legends/:storeId
GET /sections/:storeId
GET /items/barcode/:barcode
GET /items/section/:sectionId
GET /items/search
GET /item-nodes/:barcode
GET /receipts/:googleId
GET /logs/:sessionId
GET /items-test/:barcode
GET /receipts/id/:googleId
POST /receipts
POST /receipt-items
GET /receipt-items/:receiptId
GET /stats/frequency
GET /stats/totals
POST /payment