/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingattachments', {
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filedsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    filepath: {
      type: DataTypes.STRING(150),
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
    taskcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'offboardingattachments'
  });
};
