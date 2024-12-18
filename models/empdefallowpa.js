/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empdefallowpa', {
    allowamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "empdefallowpa_allowcode_empcode_prjcde_unique"
    },
    allowqty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    allowrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    companycode: {
      type: DataTypes.STRING(50),
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
    cuscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "empdefallowpa_allowcode_empcode_prjcde_unique"
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
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "empdefallowpa_allowcode_empcode_prjcde_unique"
    },
    prjdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tmpamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmpqty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmprate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empdefallowpa'
  });
};
