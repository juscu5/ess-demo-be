/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancyrequestfile2', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jobdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jobvacancyrequestfile2'
  });
};
