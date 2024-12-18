/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_employeemembership', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    memcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    memdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subamt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subcomsdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subpaidby: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subrenewdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trndtetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_employeemembership'
  });
};
