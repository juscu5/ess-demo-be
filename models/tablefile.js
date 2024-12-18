/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tablefile', {
    ConnectProperty: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DatabaseName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pick: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TableDsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TableFilename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tablefile'
  });
};
