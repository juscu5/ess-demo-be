/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('passwordhistoryfile_ess', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrpwd: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'passwordhistoryfile_ess'
  });
};
