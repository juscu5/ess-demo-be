/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlphformfile', {
    phformdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phformfile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phformpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phformtitle: {
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
    tableName: 'dlphformfile'
  });
};
