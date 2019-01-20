const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/dishes")
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next(); //pass req,res,next to the next method
})
.get((req,res,next)=>{
  console.log(req.url)
  res.end("will send all the dishes to you");
})
.post((req,res,next)=>{
  console.log(req.url);
  res.end("will add dish: "+ req.body.name+" with details "+req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on "+req.url);
})
.delete((req,res,next)=>{
  res.statusCode=403;
  res.end("will not supported on "+req.url);
})

////////////////////////////// -------------- /dishes/dishId --------------------------------------////////////////////
dishRouter.route("/dishes/:dishId")
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next();
})
.get((req,res,next)=>{
  res.end("I am sending  details of the dishId "+req.params.dishId);
})
.post((req,res,next)=>{
  res.end("not supported "+ req.params.dishId);
})
.put((req,res,next)=>{
  res.end("updated the details of the dishid "+ req.params.dishId);
})
.delete((req,res,next)=>{
  res.end("delted your dish from menu "+ req.params.dishId)
})

module.exports = dishRouter;
