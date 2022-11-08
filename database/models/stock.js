module.exports = (sequelize, dataTypes) => {
    let Stock = sequelize.define(
        'Stock',
        {
            id: {
                type: dataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            idProducto: {
                type: dataTypes.STRING,
            },
            cantidad: {
                type: dataTypes.INT,
            },
        },{
            tableName : 'stock',
            timestamps : false,
        }
    );

    return Stock;
};