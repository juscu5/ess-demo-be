/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingreqfile1', {
    approver: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    apvfieldone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    duedte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fieldfive: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fieldfour: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fieldone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fieldseven: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fieldthree: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fieldtwo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    is_cancel: {
      type: DataTypes.INTEGER,
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
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngacquired: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngcost: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngexpect: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngfacilitator: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    trnggain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trnghelp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngmanifest: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngresult: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngsched: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingreqfile1'
  });
};
