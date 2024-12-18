/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('glaccountsfile', {
    glactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    glactdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sortorder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    sumperaccnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'glaccountsfile'
  });
};
