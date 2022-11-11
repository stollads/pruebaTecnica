var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/modificar', indexController.modificarProducto);

router.get('/crear', indexController.crearProducto);

/* Rutas de Endpoints */
router.post('/agregar', indexController.agregar);

router.put('/actualizar', indexController.modificar);

router.delete('/eliminar', indexController.eliminar);

module.exports = router;
