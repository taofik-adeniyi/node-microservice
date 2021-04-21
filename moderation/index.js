const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())


app.post('/events', (req, res)=>{

})



app.listen(4003, ()=>{
    console.log('listening on 4003');
})