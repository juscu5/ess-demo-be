/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userhraccess', {
    hrcode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hrdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hrnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrlvl: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    usrpwd: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userhraccess'
  });
};
