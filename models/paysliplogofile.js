/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paysliplogofile', {
    filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    filepath: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_show: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
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
    }
  }, {
    sequelize,
    tableName: 'paysliplogofile'
  });
};
