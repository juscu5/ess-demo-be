/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expensesfile1', {
    approve: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apprved_reason: {
      type: DataTypes.TEXT,
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
    apvhrs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bfamnt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    canceltyp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    currency: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    disapprved_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dramnt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expaddr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expccenter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expclient: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    expdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "expensesfile1_expdocnum_unique"
    },
    expissuer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    exprefnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    exptinno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    exptype: {
      type: DataTypes.STRING(200),
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
    lhamnt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reqdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reqstr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmefrm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmeto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
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
    viewstat: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expensesfile1'
  });
};
