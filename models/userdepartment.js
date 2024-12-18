/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userdepartment', {
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
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrlvl: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userdepartment'
  });
};
