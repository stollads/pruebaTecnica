const db = require('../database/models');

function sendResponse(req, res, data, mensaje){
    errors = req.errors;
    if (errors.length == 0){
        return res.render('pantallaError');
    } else {
        return res.render('pantallaFinalizado', {mensaje});
    }
}

module.exports = {
    agregar(req, res){
        let result = db.Producto.create(req.body).then((producto)=>{
            return db.Stock.create({
                id_producto : producto.id,
                cantidad : req.body.cantidad,
            });
        });

        return Promise.all(([result])).then(([result])=>{
            return sendResponse(req,res,result, 'Se ha agregado con exito su producto');
        });
    },
    modificar(req, res){
        let result = db.Producto.update(req.body);

        return Promise.all(([result])).then(([result])=>{
            return sendResponse(req,res,result, 'Se ha modificado con exito su producto');
        });
    },
    eliminar(req, res){
        let result = db.Producto.destroy({
            where:{
                id:req.body.id,
            }
        });

        return sendResponse(req,res,result, 'Su producto a sido eliminado');
    },
    index(req, res) {
        let listadoProductos = db.Producto.findAll({
            include: [{
                model: db.Stock,
                as: 'stock',
                required: false,
            },{
                model: db.TipoProducto,
                as: 'tipo_producto',
                required : true,
            }],
        });

        return Promise.all([listadoProductos]).then(([listadoProductos])=>{
            listadoProductos.map((producto)=>{
                console.log(producto.tipo_producto);
            })
            res.render('index', {listadoProductos});
        });
    },
    modificarProducto(req, res) {
        let producto = db.Producto.findByPk(req.params.id);
        let tiposDeProducto = db.TipoProducto.findAll();

        Promise.all([producto, tiposDeProducto]).then(([producto,tiposDeProducto])=>{
            res.render('modificarProducto', {producto,tiposDeProducto});
        })
    },
    crearProducto(req, res) {
        let tiposDeProducto = db.TipoProducto.findAll();

        Promise.all([tiposDeProducto]).then(([tiposDeProducto])=>{
            res.render('crearProducto', {tiposDeProducto});
        });
    },
}