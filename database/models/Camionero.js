const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Camionero extends Model {}

Camionero.init({
    dni: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    nombre: DataTypes.STRING(30),
    telefono: DataTypes.STRING(13),
    direccion: DataTypes.STRING(50),
}, {
    sequelize,
    modelName: 'camionero',
    tableName: 'camioneros'
})
module.exports = Camionero;