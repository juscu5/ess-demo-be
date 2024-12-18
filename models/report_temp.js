/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_temp', {
    callform: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    callparam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    controltype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    excelcol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    excelrow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    falignment: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fformat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fheight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fielddsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldtype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    filter1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    filter2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fleft: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fontbold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fontitalic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fontname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fontsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fontstyle: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    forecolor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fshow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ftop: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fwidth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    groupindex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    groupname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pageno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prtpage: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    showmore: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'report_temp'
  });
};
