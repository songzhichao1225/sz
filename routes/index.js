var express = require('express');
var router = express.Router();
var fs = require('fs');
var szc=0;
router.get('/', function(req, res, next) {
  szc++;
  fs.readFile('public/szc.txt','utf-8',function(err,data){
    if (err) {
      console.log(err)
    } else{
      console.log(data)
      fs.writeFile('public/szc.txt','访问的次数：'+szc,function(err){
        if(err){
          console.log(err)
        }
      })
      res.render('index', { title: data});
    }
  })

});
module.exports = router;
