/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantposition', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
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
    tableName: 'applicantposition'
  });
};
