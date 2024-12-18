/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeehealthcare', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    idno: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    issdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    memtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    progtype: {
      type: DataTypes.STRING(100),
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
    tableName: 'employeehealthcare'
  });
};
