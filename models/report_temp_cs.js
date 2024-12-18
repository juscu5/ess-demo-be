/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_temp_cs', {
    amountinwords: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bindfield: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
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
    dividertype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    divindex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drill_asmname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    drill_filter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    drill_methodname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    drill_repname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drill_reptype: {
      type: DataTypes.STRING(50),
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
    filter: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fontstrikeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fontstyle: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fontunderline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    forecolor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    formula: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    formulafield1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    formulafield2: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    groupcat: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    groupfield: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    hidedetails: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagelayout: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    joinby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linetype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    objname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pageno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prtdte: {
      type: DataTypes.DATE,
      allowNull: true
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
    selectedtable: {
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
    suppressifzero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    table1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    table2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wordwrap: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    wordwraptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'report_temp_cs'
  });
};
