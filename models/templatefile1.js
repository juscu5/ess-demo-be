/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatefile1', {
    message: {
      type: DataTypes.TEXT,
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
    },
    tempcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    temptype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'templatefile1'
  });
};
