/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leavetypefile', {
    leavecde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    leavedsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    withoutpay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    xorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'leavetypefile'
  });
};
