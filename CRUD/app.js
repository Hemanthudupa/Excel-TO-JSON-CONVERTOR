let express = require("express");
let app = express();
let { readFileSync, writeFileSync } = require("fs");
let path = require("path");


app.use(express.urlencoded({ extended: false }));

// app.get('/',(req,res)=>{
//   res.send(readFileSync('output.json','utf-8'))
// })

app.get("/hello", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(req.url);
  res.send(readFileSync("output.json", "utf-8"));
});

app.listen(1000, () => console.log(" server started "));

app.post("/add", (req, res) => {

 console.log( req.body)
 
  writeFileSync('output.json',JSON.stringify({id:id,name:name}),{path:'a'})

  res.send(readFileSync("output.json", "utf-8"));
});
