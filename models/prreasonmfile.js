/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prreasonmfile', {
    prreasoncode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "prreasonmfile_prreasoncode_unique"
    },
    prreasondesc: {
      type: DataTypes.STRING(150),
      allowNull: true,
      unique: "prreasonmfile_prreasoncode_prreasondesc_unique"
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trntyp: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "Personnel Request"
    }
  }, {
    sequelize,
    tableName: 'prreasonmfile'
  });
};
