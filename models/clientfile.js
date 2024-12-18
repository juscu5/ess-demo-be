/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clientcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "clientfile_subdrycde_clientcde_unique"
    },
    clientdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modulecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    moduledb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    clientdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "clientfile_subdrycde_clientcde_unique"
    }
  }, {
    sequelize,
    tableName: 'clientfile'
  });
};
