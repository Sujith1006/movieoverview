var express = require('express');
var app = express();
var axios = require('axios')
const cors = require("cors");
const bodyParser = require("body-parser");
var CircularJSON = require('circular-json')
app.use(bodyParser.json());
app.use(
bodyParser.urlencoded({
extended: true
})
);
app.use(cors());

app.get('/', (req, res)=> {
res.send("hello")
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/getData', async (req, res)=> {

// var data = req.body
var response = await axios.get("http://www.mocky.io/v2/5d95921033000070002f8a1e")
// .then((response)=>{
// console.log(response)
// var data1 = CircularJSON.stringify(response.data)
// data1 = JSON.parse(data1)
// res.json(data1)
// }) 
var data1 = CircularJSON.stringify(response.data)
data1 = JSON.parse(data1)
res.json(data1)
// res.send(data1);
})

