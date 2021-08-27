var express = require('express');
var router = express.Router();
var travelsRouter = require('../apis/travels/travels.routes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/travels', travelsRouter)

module.exports = router;
