/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repdesignfile1', {
    detail2linecount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    detail2lineheight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    detaillinecount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    detaillineheight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    filter: {
      type: DataTypes.STRING(250),
      allowNull: true
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
    headerheight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    headerwidth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    initrep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paperheight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    paperorientation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    papersize: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    paperwidth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    printtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    repname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sourcefile1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sourcefile2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sourcefile3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sourcemdb: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sourcetype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    repversion: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    prtdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    manual_plot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'repdesignfile1'
  });
};
