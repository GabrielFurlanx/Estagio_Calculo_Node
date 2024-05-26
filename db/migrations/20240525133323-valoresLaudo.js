'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('valoresLaudo', {
      idTeste: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      val1: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_1: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_1: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_1: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_1: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_1: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_2: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_2: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_2: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_2: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_2: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_3: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_3: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_3: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_3: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_3: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_4: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_4: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_4: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_4: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_4: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_5: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_5: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_5: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_5: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_5: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_6: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_6: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_6: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_6: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_6: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_7: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_7: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_7: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_7: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_7: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_8: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_8: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_8: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_8: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_8: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_9: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_9: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_9: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_9: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_9: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_10: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_10: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_10: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_10: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_10: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_11: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_11: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_11: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_11: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_11: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_12: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_12: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_12: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_12: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_12: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_13: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_13: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_13: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_13: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_13: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val1_14: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val2_14: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val3_14: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      val4_14: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      index_14: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      IPA: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      PP: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('valoresLaudo');
  }
};
