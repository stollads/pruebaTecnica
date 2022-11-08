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
                type: dataTypes.INT,
            },
        },{
            tableName : 'producto',
            timestamps : false,
        }
    );

    return Producto;
};