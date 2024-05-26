'use strict';
const {
  Model
} = require('sequelize');
const valoreslaudo = require('./valoreslaudo');
module.exports = (sequelize, DataTypes) => {
  class Laudo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laudo.init({
    nome_medico: DataTypes.STRING,
    data_entrada: DataTypes.DATE,
    data_emissao: DataTypes.DATE,
    cpf_paciente: DataTypes.STRING,
    tipo_Laudo: DataTypes.INTEGER,
    nome_crianca: DataTypes.STRING,
    item_paciente: DataTypes.STRING,
    valores_referencia: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Laudo',
  });
  return Laudo;
};
