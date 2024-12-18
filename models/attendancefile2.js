/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendancefile2', {
    approve: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    attdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    linenum: {
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timin: {
      type: DataTypes.TIME,
      allowNull: true
    },
    timout: {
      type: DataTypes.TIME,
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attendancefile2'
  });
};
