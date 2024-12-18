/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repatmfile2', {
    agreement: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    date1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date5: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empatmno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linnum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num10: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num11: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num12: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num13: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num14: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num15: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num16: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num17: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num18: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num19: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num20: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num21: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num22: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num23: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num25: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num26: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num27: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num28: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num29: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num30: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num31: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num6: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num7: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num8: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num9: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    prtline: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    text1: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text10: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text11: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text12: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text13: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text14: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text15: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text16: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text17: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text18: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text19: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text2: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text20: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text21: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text22: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text23: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text24: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text25: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text26: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text27: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text28: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text29: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text3: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text30: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text31: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text32: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text33: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text34: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text35: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text36: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text37: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text38: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text39: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text4: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text40: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text41: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text42: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text43: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text44: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text45: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text46: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text47: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text48: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text49: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text5: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text50: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text6: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text7: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text8: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    text9: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    textgrp1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    textgrp2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    textgrp3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    textgrp4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    textgrp5: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repatmfile2'
  });
};
