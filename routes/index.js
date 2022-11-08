var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/modificar', function(req, res, next) {
  res.render('modificarProducto');
});

router.get('/crear', function(req, res, next) {
  res.render('crearProducto');
});


module.exports = router;
