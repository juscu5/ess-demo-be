/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('upload_paths', {
    pathcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pathdesc: {
      type: DataTypes.TEXT,
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
    tableName: 'upload_paths'
  });
};
