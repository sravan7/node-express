const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route("/leaders")
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next(); //pass req,res,next to the next method
})
.get((req,res,next)=>{
  console.log(req.url)
  res.end("will send all the leaders to you");
})
.post((req,res,next)=>{
  console.log(req.url);
  res.end("will add leader name: "+ req.body.name+" with details "+req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on "+req.url);
})
.delete((req,res,next)=>{
  res.statusCode=403;
  res.end("will not supported on "+req.url);
})

////////////////////////////// -------------- /leaders/leaderId --------------------------------------////////////////////
leaderRouter.route("/leaders/:leaderId")
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next();
})
.get((req,res,next)=>{
  res.end("I am sending  details of the leaderId "+ req.params.leaderId);
})
.post((req,res,next)=>{
  res.end("not supported "+ req.params.leaderId);
})
.put((req,res,next)=>{
  res.end("updated the details of the leaderId "+ req.params.leaderId);
})
.delete((req,res,next)=>{
  res.end("delted your leader from menu "+ req.params.leaderId)
})

module.exports = leaderRouter;
