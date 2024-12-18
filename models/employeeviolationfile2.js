/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeviolationfile2', {
    attachtitle: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    casedocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    infdocnum: {
      type: DataTypes.STRING(50),
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
    viofile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    viopath: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeviolationfile2'
  });
};
