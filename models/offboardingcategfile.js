/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingcategfile', {
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deptcode: {
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
    }
  }, {
    sequelize,
    tableName: 'offboardingcategfile'
  });
};
