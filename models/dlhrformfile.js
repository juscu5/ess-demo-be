/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlhrformfile', {
    hrformdsc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hrformfile: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hrformpath: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hrformtitle: {
      type: DataTypes.STRING(200),
      allowNull: false
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
    tableName: 'dlhrformfile'
  });
};
