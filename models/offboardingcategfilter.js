/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingcategfilter', {
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    inselected: {
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
    taskcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'offboardingcategfilter'
  });
};
