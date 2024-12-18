/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2j', {
    accomplishmentcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    apporder: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    apprslcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2j_subdrycde_apprslcode_unique"
    },
    apprsldsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scrcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    scrdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    scrfrm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    scrto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2j_subdrycde_apprslcode_unique"
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2j'
  });
};
