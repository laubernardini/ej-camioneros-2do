const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Camion extends Model {}

Camion.init({
    matricula: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    modelo: DataTypes.STRING(30),
    tipo: DataTypes.STRING(13),
    portencia: DataTypes.INTEGER(6),
}, {
    sequelize,
    modelName: 'camion',
    tableName: 'camiones'
})
module.exports = Camion;