/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syscolor', {
    backcolor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    buttonbackcolor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gridcolor: {
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    textcolor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wlabelcolor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'syscolor'
  });
};
