/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_tmp_rep', {
    CreAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    DebAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    DeptCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DeptDesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GLCode: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    debcre: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PayGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SortOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_tmp_rep'
  });
};
