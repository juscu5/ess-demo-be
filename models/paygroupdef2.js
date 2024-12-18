/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paygroupdef2', {
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cycleno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    paycycle: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tablename: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paygroupdef2'
  });
};
