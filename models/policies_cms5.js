/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('policies_cms5', {
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    header: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_folder: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    node_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent: {
      type: DataTypes.STRING(255),
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
    tableName: 'policies_cms5'
  });
};
