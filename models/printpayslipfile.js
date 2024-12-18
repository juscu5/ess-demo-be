/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('printpayslipfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    empcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    paygroup: {
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
    dettyp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    amttyp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fldtxt01: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fldtxt02: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fldtxt03: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fldtxt04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f34align: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    colnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'printpayslipfile'
  });
};
