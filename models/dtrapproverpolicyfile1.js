/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtrapproverpolicyfile1', {
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
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nooflevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dtrapproverpolicyfile1'
  });
};
