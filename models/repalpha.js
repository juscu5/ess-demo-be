/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repalpha', {
    adwithtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    computetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dailytax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emptin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    field10: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4c: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4d: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4e: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4f: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4g: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4h: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4i: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4j: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4k: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field4l: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field6: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field8: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field8a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field8b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field9a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    field9b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    fixtax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    headingkey: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hiredate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    incdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    monthsemp: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    precom13th: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomgrossinc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomnt13th: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomntsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomsss: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomtaxwit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomyearterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    premiumpaid: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    seqno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxadjust: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxdue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxexemption: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxjantonov: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxtype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    termdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    withtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'repalpha'
  });
};
