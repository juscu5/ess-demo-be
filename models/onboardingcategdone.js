/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onboardingcategdone', {
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    done: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtesubmitted: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
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
    tableName: 'onboardingcategdone'
  });
};
