/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_empapproval_allow_history', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    is_allowed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason: {
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
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'training_empapproval_allow_history'
  });
};
