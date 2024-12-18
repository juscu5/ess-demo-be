/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_empext', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empcode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    submenid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    colname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fielddesc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    oldval: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    oldval_desc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    newval: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    newval_desc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    approve: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trndtetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    subdrycde: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_empext'
  });
};
