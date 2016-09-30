var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user');
});
router.get('/login',function(req,res,next){
	res.send('merhaba');
});


module.exports = router;