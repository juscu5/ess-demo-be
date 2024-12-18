/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgstructurefile1', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    orgcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    orgdesc: {
      type: DataTypes.STRING(50),
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
    tableName: 'orgstructurefile1'
  });
};
