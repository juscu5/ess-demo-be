/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('violationfile', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "violationfile_viocode_subdrycde_unique"
    },
    viocode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "violationfile_viocode_subdrycde_unique"
    },
    viodate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vioday: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    viodesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'violationfile'
  });
};
