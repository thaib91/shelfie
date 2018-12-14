const express = require('express');
const massive = require('massive');
require('dotenv').config;
const ctrl = require('./controller')
const {CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.createItem)
app.delete('/api/product/:id', ctrl.deleteItem)
app.put('/api/product/:id', ctrl.editItem)




PORT = 4000;
massive('postgres://fgdrljxxsevbko:0544cd67a8dd8936f939d47611ce8ed150b763162eb012a00e157b18d1a8489f@ec2-23-23-235-86.compute-1.amazonaws.com:5432/d1suqlum29ko1q?ssl=true')
    .then(connection => {
        app.set('db', connection)
        app.listen(PORT, ()=>console.log(`There are ${PORT} Tacos at the end of the tunnel!`))
    }).catch(err => console.log(err))