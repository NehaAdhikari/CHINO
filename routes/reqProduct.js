var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs');


const reqProd = require('../app/models/reqProd');

var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'uploads/')
 },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({
 storage: storage
});
                            


router.post('/insert',upload.any(), function (req,res){

  var data = req.body;
  var images = req.files[0];
  var newreqProd = new reqProd();
  newreqProd.productName = data.productName;
  newreqProd.productSize = data.productSize;
  newreqProd.productSample = images.productSample;
  newreqProd.productQuantity = data.productQuantity;
  newreqProd.image = data.originalname;
  newreqProd.email=data.semester;
  newreqProd.contact=data.department;
  newreqProd.total=data.uploadtype;
  newreqProd.notes = data.notes;
  newreqProd.image = data.image;
  newreqProd.userID = data.userID;

  newreqProd.save(function(err, doc){
    if (err) {console.log('error while saving in database');}
    /*res.send(req.body);*/

    var filename = newreqProd._id + images.originalname;
                    console.log(filename);
  
                  
  });


  reqProd.create(images, function(error, image) {
    if (!error) {
    console.log("image created.");
    }
  });
     
  res.redirect('/indext');
  
})

module.exports = router;
