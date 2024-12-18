/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlbirformfile', {
    birformdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    birformfile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    birformpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    birformtitle: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    tableName: 'dlbirformfile'
  });
};
