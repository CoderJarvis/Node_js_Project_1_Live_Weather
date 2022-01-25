var express = require('express')
var app = express()
const path = require("path");

const staticPath= path.join(__dirname,'../static')
app.use(express.static(staticPath));

app.listen(3000,() => {
  console.log(`Server running at 3000`);
});