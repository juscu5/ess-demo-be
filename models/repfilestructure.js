/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repfilestructure', {
    databasename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fielddsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fieldtype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldtypen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    groupindex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reportfield: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repfilestructure'
  });
};
