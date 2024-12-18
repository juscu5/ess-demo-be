/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reppayregfull', {
    amt1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt10: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt11: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt12: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt13: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt14: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt15: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt16: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt17: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt18: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt19: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt20: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt21: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt22: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt23: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt24: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt25: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt26: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt27: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt28: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt29: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt30: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt31: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt6: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt7: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt8: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt9: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    companycode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    de16: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    des1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des10: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des11: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des12: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des13: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des14: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des15: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des17: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des18: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des19: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des20: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des21: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des22: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des23: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des24: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des25: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des26: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des27: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des28: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des29: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des30: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des31: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des4: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des5: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des6: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des7: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des8: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    des9: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    headingkey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'reppayregfull'
  });
};
