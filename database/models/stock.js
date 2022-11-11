module.exports = (sequelize, dataTypes) => {
    let Stock = sequelize.define(
        'Stock',
        {
            id: {
                type: dataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            id_producto: {
                type: dataTypes.STRING,
            },
            cantidad: {
                type: dataTypes.INTEGER,
            },
        },{
            tableName : 'stock',
            timestamps : false,
        }
    );

    Stock.associate = function(models) {
        Stock.hasOne(models.Producto, {
            as : 'producto',
            foreignKey : 'id',
        });
    }

    return Stock;
};