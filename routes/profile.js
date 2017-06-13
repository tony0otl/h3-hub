var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
     title: 'profile',
     name: 'tony montana',
     age: '15',
     position: 'student',
     hobies: ['movie', 'math' , 'long walks on the beach'],
  }
  res.render('profile', context);
});

module.exports = router;
