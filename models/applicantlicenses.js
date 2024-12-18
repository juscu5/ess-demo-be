/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantlicenses', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expdtestr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    issdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    licname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    licno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    licplace: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantlicenses'
  });
};
