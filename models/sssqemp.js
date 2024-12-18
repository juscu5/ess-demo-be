/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sssqemp', {
    apqtr: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ec001: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ec002: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ec003: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    eenmi: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ename: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    esurn: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hrdte: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    med01: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    med02: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    med03: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    reccd: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remks: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sec01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sec02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sec03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sign1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sign2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sign3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smed1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smed2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smed3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ssnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sss01: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    sss02: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    sss03: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'sssqemp'
  });
};
