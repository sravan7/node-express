const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route("/promotions")
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next(); //pass req,res,next to the next method
})
.get((req,res,next)=>{
  console.log(req.url)
  res.end("will send all the promotions to you");
})
.post((req,res,next)=>{
  console.log(req.url);
  res.end("will add promo: "+ req.body.name+" with details "+req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on "+req.url);
})
.delete((req,res,next)=>{
  res.statusCode=403;
  res.end("will not supported on "+req.url);
})

////////////////////////////// -------------- /promotions/promoId --------------------------------------////////////////////
promotionRouter.route("/promotions/:promoId")
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next();
})
.get((req,res,next)=>{
  res.end("I am sending  details of the promoId "+ req.params.promoId);
})
.post((req,res,next)=>{
  res.end("not supported "+ req.params.promoId);
})
.put((req,res,next)=>{
  res.end("updated the details of the promoId "+ req.params.promoId);
})
.delete((req,res,next)=>{
  res.end("delted your promo from menu "+ req.params.promoId)
})

module.exports = promotionRouter;
