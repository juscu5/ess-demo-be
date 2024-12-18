/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requirementfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reqdsc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "requirementfile_reqdsc_unique"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'requirementfile'
  });
};
