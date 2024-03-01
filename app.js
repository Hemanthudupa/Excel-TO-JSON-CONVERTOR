// let http = require("http");
// let { readFileSync } = require("fs");

let express=require("express");
let app=express()
let path=require("path");




// app.get('/users',(req,res)=>{
//     console.log(res.body)
     
//     console.log("first")
//     res.end(res.body)
// })
// app.listen(1000,()=>{console.log(" server on !!!!")})
app.use(express.urlencoded({extended:false}))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/form.html'))
   
})


app.post('/add',(req,res)=>{
    res.send('res.status')
    
    console.log(req.body)

})
app.listen(1000,()=>console.log("server launched !!!"))













// let i=0;
// const server = http.createServer((req, res) => {
    // console.log(i++)





//   if(req.url==='/')
//   {
//     console.log(  req.url)
//     // res.write(readFileSync("./index.html"));//here in html page ive mentioned some link tag so during the  redering this pag in UI , it parses the page and when it sees the link tag it again hit the url and sends the request to the page ,so that time again call back function is excicutes  so im getting all the url like /index.css ,/index.js ,/fevicon.pxg
     
//     res.end("ended");
//     console.log("user hit the server ");
//   }
//   else if(req.url==='/index.css')
//   {
//     // res.write(readFileSync("./index.css"));//here in html page ive mentioned some link tag so during the  redering this pag in UI , it parses the page and when it sees the link tag it again hit the url and sends the request to the page ,so that time again call back function is excicutes  so im getting all the url like /index.css ,/index.js ,/fevicon.pxg
     
//     res.end("ended 2");
//   }
//   else if(req.url==='/index.js')
//   {
//     // res.write(readFileSync("./index.js"));//here in html page ive mentioned some link tag so during the  redering this pag in UI , it parses the page and when it sees the link tag it again hit the url and sends the request to the page ,so that time again call back function is excicutes  so im getting all the url like /index.css ,/index.js ,/fevicon.pxg
     
//     res.end("ended");
//   }
// });

// server.listen(1000);