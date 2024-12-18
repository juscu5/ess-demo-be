/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_application_extension', {
    addr_school: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    appdte_out: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apprved_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    apptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    degree_com: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    disapprved_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "employee_application_extension_docnum_unique"
    },
    empaddr_out: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empname_out: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expected_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_cancel_disapprove: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jobdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name_school: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    natwork_out: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    procdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    procdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    procdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trntime: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unit_taken: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unit_tocomplete: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    venwork: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    workdte_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    workdte_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    worktime_from: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    worktime_to: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_application_extension'
  });
};
