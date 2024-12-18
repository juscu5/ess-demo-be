/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpreportfile2', {
    date1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num10: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num11: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num12: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num13: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num14: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num15: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num16: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num17: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num18: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num19: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num20: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num6: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num7: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num8: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num9: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum10: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum11: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum12: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum13: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum14: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum15: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum16: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum17: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum18: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum19: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum20: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum3: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum4: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum5: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum6: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum7: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum8: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum9: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpreportfile2'
  });
};
