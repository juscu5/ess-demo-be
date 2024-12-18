/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtrapproverpolicyfile2', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    approvercode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    signature_dir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dtrapproverpolicyfile2'
  });
};
