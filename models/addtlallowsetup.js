/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addtlallowsetup', {
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowbasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowbasicfix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowbasicfixdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecolasetup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallowotrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    setupcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    multiprjecola: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'addtlallowsetup'
  });
};
