/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_approver', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
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
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'training_approver'
  });
};
