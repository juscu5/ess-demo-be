/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicanttesttaken', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtetaken: {
      type: DataTypes.DATEONLY,
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
    testrating: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    testtitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicanttesttaken'
  });
};
