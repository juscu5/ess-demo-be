/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeposition', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    autolog: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comcde: {
      type: DataTypes.STRING(20),
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
    jobdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobspecs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(100),
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
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    salary: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sortdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    subdrycde: {
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
    tableName: 'employeeposition'
  });
};
