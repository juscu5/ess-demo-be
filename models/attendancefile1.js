/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendancefile1', {
    approve: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    attdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
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
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(255),
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
    tableName: 'attendancefile1'
  });
};
