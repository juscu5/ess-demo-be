/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('glsetupfile1', {
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    glcategory: {
      type: DataTypes.STRING(100),
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
    tableName: 'glsetupfile1'
  });
};
