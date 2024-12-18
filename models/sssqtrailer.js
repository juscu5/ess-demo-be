/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sssqtrailer', {
    emptotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tec01: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tec02: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tec03: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmed1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmed2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmed3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tsec1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsec2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsec3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsgn1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsgn2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsgn3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsmd1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsmd2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tsmd3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tss01: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tss02: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tss03: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'sssqtrailer'
  });
};
