/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeposition_extension', {
    daysto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leaves: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mosto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    posdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    yrofservice: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    yrsto: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeposition_extension'
  });
};
