/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onboardingcategfile', {
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cnt: {
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
    tableName: 'onboardingcategfile'
  });
};
