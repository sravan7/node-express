const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dishRouter = require("./routes/dishRouter")
const hostName = "localhost";
const port = 3002;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/", dishRouter);

//app.use("/dishes/:dishId",dishRouter);
/*app.all('/dishes', (req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next(); //pass req,res,next to the next method
})

app.get("/dishes",(req,res,next)=>{
  res.end("will send all the dishes to you");
})

app.post("/dishes",(req,res,next)=>{
  res.end("will ad dish: "+ req.body.name+" with details "+req.body.description);
})

app.put("/dishes",(req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on /dishes");
})

app.delete("/dishes",(req,res,next)=>{
  res.statusCode=403;
  res.end("will not supported on /dishes");
})
*/
/*app.get("/dishes/:dishId",(req,res,next)=>{
  console.log("got requiest fo the dishId "+req.params.dishId)
  res.end("will send all the dishe to you "+ req.params.dishId);
})
app.post("/dishes/:dishId",(req,res,next)=>{
  res.statusCode=403;
  res.end("post operation not supported on "+req.params.dishId);
})
app.put("/dishes/:dishId",(req,res,next)=>{
  res.end("udated the dish "+ req.params.dishId);
})

app.delete("/dishes/:dishId",(req,res,next)=>{

  res.end("deleting the dish");
})
*/
app.use(express.static(__dirname+"/public"));
app.use((req,res,next)=>{
  //console.log(req.headers);
  res.statusCode=200;
  res.setHeader("Content-Type","text/html");
  res.end("<html><body><center><h1>Hi express</h1></center></body></html>");
})

const server = http.createServer(app);

server.listen(port,hostName, ()=>{
  console.log(`server running at port https://${hostName}:${port}`)
})
