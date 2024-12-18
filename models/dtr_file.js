/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtr_file', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dtrdocnum: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    homelocode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    homelocdesc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    workloccode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    worklocdesc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prj_dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fld_cola: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fld_sea: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fld_hgallow: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    noofdays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uthrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tot_ndhrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tot_rdholhrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tot_othrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tot_hrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dtr_file'
  });
};
