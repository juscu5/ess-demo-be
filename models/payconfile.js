/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payconfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paydbtype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paydb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payhost: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payuser: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paypw: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payprogtype: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "WEB"
    }
  }, {
    sequelize,
    tableName: 'payconfile'
  });
};
