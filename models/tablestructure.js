/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tablestructure', {
    DatabaseName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FieldDsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FieldSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FieldType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FieldTypeN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImportCol: {
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
    Remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tablestructure'
  });
};
