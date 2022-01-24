var express = require('express')
var app = express()
const path = require("path");


app.get('/',  (req, res)=> {
    res.sendFile(path.join(__dirname,'./weather.html'))
    // res.render('home.html') not working 
})

app.listen(3000,() => {
  console.log(`Server running at 3000`);
});