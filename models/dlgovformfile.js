/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlgovformfile', {
    govformdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    govformfile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    govformpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    govformtitle: {
      type: DataTypes.STRING(100),
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
    tableName: 'dlgovformfile'
  });
};
