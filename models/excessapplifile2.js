/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('excessapplifile2', {
    apprvedte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    excessappdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    excesshrs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    excesstyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    procdte: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    procdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    procdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'excessapplifile2'
  });
};
