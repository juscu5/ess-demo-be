/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_promotionfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    promdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    canceltyp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    joblvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rating: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datehired: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    daterecom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recom_joblvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_rating: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contri_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jst_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mjr_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addtnl_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    diffmjr_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recom_branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    filepath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    promstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    validatedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    validatedby_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    receivedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    receivedby_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acceptance_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    acceptance_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acceptedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sum_promotionfile'
  });
};
