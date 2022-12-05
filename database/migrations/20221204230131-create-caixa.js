'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Caixas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY
      },
      descricao: {
        type: Sequelize.STRING
      },
      tipo_operacao: {
        type: Sequelize.ENUM
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      saldo: {
        type: Sequelize.DECIMAL
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      criado_em: {
        type: Sequelize.DATE
      },
      atualizado_em: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Caixas');
  }
};