/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2f', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scrcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2f_scrcde_subdrycde_unique"
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
      unique: "pmssetupfile2f_scrcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2f'
  });
};
