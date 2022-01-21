const http=require("http");
const fs=require("fs");
const requests=require("requests");


let myHtml=fs.readFileSync('./home.html','utf-8');

// console.log(myHtml.replace("Good","bad"));
// let str="baaadd";
// myHtml=myHtml.replace("Good",str);
// console.log(myHtml);


const server=http.createServer((req,res)=>{
    let str="panikoili";
    let apiUrl="https://api.openweathermap.org/data/2.5/weather?q="+str+"&appid=be444c535b830d605e535d63f2d6a4e5";
    requests(apiUrl)
    .on('data',  (chunk) =>{    //json
    const myObj=JSON.parse(chunk);  //object

    let city=myObj.name;
    let temp=Math.round(myObj.main.temp - 273.15);

    myHtml=myHtml.replace("{{city}}",city);
    myHtml=myHtml.replace("{{temp}}",temp);


    
    // console.log("city name : "+city);
    // console.log("current temp : "+Math.round(temp));

    res.write(myHtml);
    })
    .on('end',  (err) =>{
    res.end();
    });
});


server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running on thr port 3000");   
})