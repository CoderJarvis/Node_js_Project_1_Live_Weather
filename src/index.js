var express = require('express')
var app = express()
const path = require("path");

const port = process.env.PORT || 3000

const staticPath= path.join(__dirname,'../static')
app.use(express.static(staticPath));

app.listen(port,() => {
  console.log(`Server running at ${port}`);
});