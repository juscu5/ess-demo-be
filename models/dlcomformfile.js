/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlcomformfile', {
    comformdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    comformfile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comformpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    comformtitle: {
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
    tableName: 'dlcomformfile'
  });
};
