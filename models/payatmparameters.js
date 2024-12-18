/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payatmparameters', {
    accnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowatmentry: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    approvedby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    atmcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bankcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    batchno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    brncde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ccprefix: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    clientcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    effdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    field1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field10: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field11: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field12: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field13: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field14: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field15: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field16: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field17: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field18: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field19: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field20: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field21: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field22: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field23: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field24: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field25: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field26: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    field27: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    field28: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    field29: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    field3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field30: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    field4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrolldte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    preparedby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    refnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    attnloc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    attnname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    attnpos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cercor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    noteby: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    notebypos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    offdes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    preby: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payatmparameters'
  });
};
