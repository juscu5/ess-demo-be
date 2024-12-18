/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salarygradeloan', {
    amortization: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    begbal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    effmonth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    effyear: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loancde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loandate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loandsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    origamnt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salarycode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salarygradeloan'
  });
};
