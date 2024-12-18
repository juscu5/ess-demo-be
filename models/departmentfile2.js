/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departmentfile2', {
    deptcode2: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "departmentfile2_deptcode2_subdrycde_unique"
    },
    deptdescription2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    depthead: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    newdeptcode2: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    olddeptcode2: {
      type: DataTypes.STRING(3),
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
      allowNull: true,
      unique: "departmentfile2_deptcode2_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'departmentfile2'
  });
};
