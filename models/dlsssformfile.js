/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlsssformfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sssformdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sssformfile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sssformpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sssformtitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dlsssformfile'
  });
};
