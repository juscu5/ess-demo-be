/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repdesignfile3', {
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sortindex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sortorder: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repdesignfile3'
  });
};
