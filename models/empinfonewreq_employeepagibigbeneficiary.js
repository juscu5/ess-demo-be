/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_employeepagibigbeneficiary', {
    bday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    benage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    benname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    relationship: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
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
    tableName: 'empinfonewreq_employeepagibigbeneficiary'
  });
};
