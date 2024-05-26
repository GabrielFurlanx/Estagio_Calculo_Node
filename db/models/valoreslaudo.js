'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ValoresLaudo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ValoresLaudo.belongsTo(models.Laudo, { foreignKey: 'idLaudo', allowNull: false });
    }
  }
  ValoresLaudo.init({
    val1: DataTypes.FLOAT,
    val2: DataTypes.FLOAT,
    val3: DataTypes.FLOAT,
    val4: DataTypes.FLOAT,
    index: DataTypes.FLOAT,
    val1_1: DataTypes.FLOAT,
    val2_1: DataTypes.FLOAT,
    val3_1: DataTypes.FLOAT,
    val4_1: DataTypes.FLOAT,
    index_1: DataTypes.FLOAT,
    val1_2: DataTypes.FLOAT,
    val2_2: DataTypes.FLOAT,
    val3_2: DataTypes.FLOAT,
    val4_2: DataTypes.FLOAT,
    index_2: DataTypes.FLOAT,
    val1_3: DataTypes.FLOAT,
    val2_3: DataTypes.FLOAT,
    val3_3: DataTypes.FLOAT,
    val4_3: DataTypes.FLOAT,
    index_3: DataTypes.FLOAT,
    val1_4: DataTypes.FLOAT,
    val2_4: DataTypes.FLOAT,
    val3_4: DataTypes.FLOAT,
    val4_4: DataTypes.FLOAT,
    index_4: DataTypes.FLOAT,
    val1_5: DataTypes.FLOAT,
    val2_5: DataTypes.FLOAT,
    val3_5: DataTypes.FLOAT,
    val4_5: DataTypes.FLOAT,
    index_5: DataTypes.FLOAT,
    val1_6: DataTypes.FLOAT,
    val2_6: DataTypes.FLOAT,
    val3_6: DataTypes.FLOAT,
    val4_6: DataTypes.FLOAT,
    index_6: DataTypes.FLOAT,
    val1_7: DataTypes.FLOAT,
    val2_7: DataTypes.FLOAT,
    val3_7: DataTypes.FLOAT,
    val4_7: DataTypes.FLOAT,
    index_7: DataTypes.FLOAT,
    val1_8: DataTypes.FLOAT,
    val2_8: DataTypes.FLOAT,
    val3_8: DataTypes.FLOAT,
    val4_8: DataTypes.FLOAT,
    index_8: DataTypes.FLOAT,
    val1_9: DataTypes.FLOAT,
    val2_9: DataTypes.FLOAT,
    val3_9: DataTypes.FLOAT,
    val4_9: DataTypes.FLOAT,
    index_9: DataTypes.FLOAT,
    val1_10: DataTypes.FLOAT,
    val2_10: DataTypes.FLOAT,
    val3_10: DataTypes.FLOAT,
    val4_10: DataTypes.FLOAT,
    index_10: DataTypes.FLOAT,
    val1_11: DataTypes.FLOAT,
    val2_11: DataTypes.FLOAT,
    val3_11: DataTypes.FLOAT,
    val4_11: DataTypes.FLOAT,
    index_11: DataTypes.FLOAT,
    val1_12: DataTypes.FLOAT,
    val2_12: DataTypes.FLOAT,
    val3_12: DataTypes.FLOAT,
    val4_12: DataTypes.FLOAT,
    index_12: DataTypes.FLOAT,
    val1_13: DataTypes.FLOAT,
    val2_13: DataTypes.FLOAT,
    val3_13: DataTypes.FLOAT,
    val4_13: DataTypes.FLOAT,
    index_13: DataTypes.FLOAT,
    val1_14: DataTypes.FLOAT,
    val2_14: DataTypes.FLOAT,
    val3_14: DataTypes.FLOAT,
    val4_14: DataTypes.FLOAT,
    index_14: DataTypes.FLOAT,
    IPA: DataTypes.FLOAT,
    PP: DataTypes.FLOAT,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ValoresLaudo',
  });

  return ValoresLaudo;
};