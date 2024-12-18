/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paydisksyspar', {
    '1601cocc': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601crdocode': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601cregadd': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601ctelno': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601ctin': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601cwname': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601czipcode': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601eocc': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601erdocode': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601eregadd': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601etelno': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601etin': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601ewname': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601ezipcode': {
      type: DataTypes.STRING(100),
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
    tableName: 'paydisksyspar'
  });
};
