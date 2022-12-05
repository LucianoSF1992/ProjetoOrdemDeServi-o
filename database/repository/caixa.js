'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caixa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Caixa.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'caixa_usuarios'
      });
    }
  }
  Caixa.init({
    data: DataTypes.DATEONLY,
    descricao: DataTypes.STRING,
    tipo_operacao: DataTypes.ENUM,
    valor: DataTypes.DECIMAL,
    saldo: DataTypes.DECIMAL,
    usuario_id: DataTypes.INTEGER,
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Caixa',
  });
  return Caixa;
};