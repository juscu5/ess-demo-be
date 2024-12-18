/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reasonfile', {
    reasoncde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reasondsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reasonfile'
  });
};
