const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json');
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
var path = require('path');

app.use(cors())

let  uuidData = data.map(i=>{
  return {
      ...i, 
      Id: uuidv4()
  }
 })
 


app.get('/allrecords', (req, res) => {
   res.send(uuidData)
})

app.get('/recorddetails', (req, res) => {
  console.log(req.query,'req.query')  
  let filter= uuidData.filter(i=>i.Id === req.query.Id)
  console.log(filter,'filter');
   res.send(filter)
})

// app.get('/recorddetails/:id', (req, res) => {
//   console.log(req.params,'req.params')  //mention

// })


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/send.html'));
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})