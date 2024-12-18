/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeposition1', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datefromstr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datetostr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    daysleaves: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deptdescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leavedtefr: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leavedtto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mlatla: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    posdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    posfrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    posto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rank: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trndtestr: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeposition1'
  });
};
