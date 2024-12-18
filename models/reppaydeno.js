/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reppaydeno', {
    companycode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    d005: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d010: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d025: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d050: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d100: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d1000: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d20: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d50: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    d500: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deptcode: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.STRING(10),
      allowNull: true
    },
    netpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    netpayrnd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    tableName: 'reppaydeno'
  });
};
