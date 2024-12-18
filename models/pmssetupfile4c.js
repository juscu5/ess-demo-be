/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile4c', {
    apprslcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    apprslcodecom: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lvleval: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmsdocnum: {
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
      allowNull: true
    },
    x2_rad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    x2_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x3_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x3_empname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    x3_rad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    x3_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x4_deptman: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    x4_deptmandate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x4_pres: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    x4_presdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x4_rad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    x4_remarks1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x4_remarks2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x4_remarks3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x4_superdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x4_supervisor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    x5_desc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_desc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_desc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_desc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x5_dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x5_months: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    x5_remarks1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_remarks2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_remarks3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_remarks4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_remarks5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x5_years: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile4c'
  });
};
