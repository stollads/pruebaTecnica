const db = require('../database/models');
module.exports={
    agregar(req, res){
        //
    },
    
    modificar(req, res){
        //
    },
    
    eliminar(req, res){
        //
    },
    index(req, res) {
        res.render('index');
    },
    modificarProducto(req, res) {
        res.render('modificarProducto');
    },
    crearProducto(req, res) {
        res.render('crearProducto');
    },
}