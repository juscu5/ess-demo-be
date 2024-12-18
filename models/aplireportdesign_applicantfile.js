/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aplireportdesign_applicantfile', {
    columncode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    columndesc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    columnname: {
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
    }
  }, {
    sequelize,
    tableName: 'aplireportdesign_applicantfile'
  });
};
