module.exports = (sequelize, dataTypes) => {
    let TipoProducto = sequelize.define(
        'TipoProducto',
        {
            id: {
                type: dataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            descripcion: {
                type: dataTypes.STRING,
            },
        },{
            tableName : 'tipo_producto',
            timestamps : false,
        }
    );

    return TipoProducto;
};
