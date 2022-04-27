var express = require('express');
const { findOneAndDelete } = require('./users'); 
var router = express.Router();
let UserModel = require('./users');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/destinations', function(req,res,next){
  res.render('write')
});

router.get('/ratings', function(req,res,next){
  UserModel.find()
  .then(function(data){
    res.render('read', {data});
  });
});

router.post('/submit', function(req,res,netx){
    UserModel.create({
      destination: req.body.destination,
      description: req.body.description
    })
    .then(function(a){
      res.redirect('/ratings');
    })
})

router.get('/update/:id', function(req,res){
  UserModel.findOne({_id: req.params.id})
  .then(function(travel){
    res.render('update', {travel});
  })
})

router.post('/update/:id', function(req,res){
  let updated = {
    destinations: req.body.destination,
    description: req.body.description
  }
  UserModel.findOneAndUpdate({_id:req.params.id},{'$set':updated},{require:true})
  .then(function(){
    res.redirect('/ratings');
  });
});

router.get('/delete/:id', function(req,res){
  UserModel.findOneAndDelete({_id:req.params.id})
  .then(function(){
    res.redirect('/ratings')
  });
});



module.exports = router;
