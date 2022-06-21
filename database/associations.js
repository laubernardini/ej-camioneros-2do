const { Camion, Camionero } = require('./models/models');
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const CamionCamionero = sequelize.define('CamionCamionero', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: DataTypes.DATE
}, { timestamps: false, tableName: 'camionesCamioneros', modelName: 'camionCamionero' });

Camion.belongsToMany(Camionero, { through: CamionCamionero, foreignKey: 'camionMatricula', as: 'camioneros' });
Camionero.belongsToMany(Camion, { through: CamionCamionero, foreignKey: 'camioneroDni', as: 'camiones' });