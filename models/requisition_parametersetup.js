/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requisition_parametersetup', {
    eaddpos: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ebody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eregard: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    esal: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    esender: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    etitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    req_remarks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'requisition_parametersetup'
  });
};
