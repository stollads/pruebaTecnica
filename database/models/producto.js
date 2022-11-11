module.exports = (sequelize, dataTypes) => {
    let Producto = sequelize.define(
        'Producto',
        {
            id: {
                type: dataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            id_tipo_producto: {
                type: dataTypes.STRING,
            },
            nombre: {
                type: dataTypes.STRING,
            },
            precio: {
                type: dataTypes.INTEGER,
            },
        },{
            tableName : 'producto',
            timestamps : false,
        }
    );

    Producto.associate = function(models) {
        Producto.hasOne(models.TipoProducto, {
            as : 'tipo_producto',
            foreignKey : 'id',
        });
        Producto.hasOne(models.Stock, {
            as : 'stock',
            foreignKey : 'id_producto',
        });
    }

    return Producto;
};