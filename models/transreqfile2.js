/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transreqfile2', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appcomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transreqfile2'
  });
};
