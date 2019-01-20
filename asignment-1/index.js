const http= require("http");
const express = require("express");
const morgan = require("morgan");

const dishRouter = require("./dishRouter");
const promotionRouter = require("./promoRouter");
const leaderRouter = require("./leaderRouter");

const hostName = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"))

app.use("/",dishRouter);
app.use("/", promotionRouter);
app.use("/", leaderRouter);

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
