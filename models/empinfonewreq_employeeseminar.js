/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_employeeseminar', {
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
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    semcost: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    seminarcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seminardesc: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    seminardte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    seminardtestr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sempayby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    semtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    semvenue: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    strtdate: {
      type: DataTypes.DATEONLY,
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
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_employeeseminar'
  });
};
