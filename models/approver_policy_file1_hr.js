/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approver_policy_file1_hr', {
    nooflevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    approval_page: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dashboard_icon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    docnumtype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docnum_prefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    has_apprv_rsn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    has_posting: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    is_requi_man_apprvr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    module: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    require_apprv_rsn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    require_disapprv_rsn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    requisition_page: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    req_remarks: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    show_dashboard: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    syspar_docnum: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    syspar_docnum_lock: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tbl1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl1_reqstr_col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl1_status_col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl1_trndte_col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl2_effdte_col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl2_status_col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl2_trndte_col: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tbl_comcde: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "ESS"
    }
  }, {
    sequelize,
    tableName: 'approver_policy_file1_hr'
  });
};
