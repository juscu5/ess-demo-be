/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tablestatfile2', {
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reccount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    upddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updsta: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    updtim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tablestatfile2'
  });
};
