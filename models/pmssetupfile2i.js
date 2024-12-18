/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2i', {
    accomplishmentcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    accomplishmentdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    accorder: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lvl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2i_lvlcde_subdrycde_unique"
    },
    lvldsc: {
      type: DataTypes.STRING(100),
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
      allowNull: true,
      unique: "pmssetupfile2i_lvlcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2i'
  });
};
