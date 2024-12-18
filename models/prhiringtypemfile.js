/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prhiringtypemfile', {
    prhtcode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "prhiringtypemfile_prhtcode_prhtdesc_unique"
    },
    prhtdesc: {
      type: DataTypes.STRING(150),
      allowNull: true,
      unique: "prhiringtypemfile_prhtcode_prhtdesc_unique"
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'prhiringtypemfile'
  });
};
