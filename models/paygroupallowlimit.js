/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paygroupallowlimit', {
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowlimit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'paygroupallowlimit'
  });
};
