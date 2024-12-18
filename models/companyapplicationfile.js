/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companyapplicationfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comdsc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dbname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'companyapplicationfile'
  });
};
