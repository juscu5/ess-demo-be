/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helpcontent', {
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    menuname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    menutitle: {
      type: DataTypes.STRING(100),
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
    }
  }, {
    sequelize,
    tableName: 'helpcontent'
  });
};
