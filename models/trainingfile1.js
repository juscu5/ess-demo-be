/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfile1', {
    approve: {
      type: DataTypes.STRING(150),
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
    apvcost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    apvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    availslot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    canceltyp: {
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
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    crsnam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expctdres: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
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
    issent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_cancel_disapprove: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maxatndee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    objective: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    regend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    regstrt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    requnitcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    schdtefrm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    schdteto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    schtimfrm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schtimto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmp_cost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmp_cost_editby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmp_cost_editby_ecode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trainingdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trainor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdet: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngdsc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trngstat: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    trngtyp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    trnstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "Training without HR Approval"
    },
    trntypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    venue: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    joblvlcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emptyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filepath: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfile1'
  });
};
