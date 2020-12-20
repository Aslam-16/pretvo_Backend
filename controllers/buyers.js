const express=require('express')
const Router=express.Router()
const DB=require('../Model/db')

Router.get("/listbuyers",function(req,res){
    const response = {
    status  : 0,
    message : 'Something went wrong in your code!'
  }
     DB.GetDocument('buyers', {}, {}, {}, function(err, result) {
            if(err) {
                res.send(response);
            } else {
                if(result.length == 0) {
                  response.status  = 2;
                  response.message = 'no data found';
                } else {
                  response.status  = 1;
                  response.message = 'success';
                  response.data    = result;
                  response.count   = result.length;
                }
                res.send(response);
              }
          });
})
module.exports=Router
