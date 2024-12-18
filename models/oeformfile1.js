/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oeformfile1', {
    approve: {
      type: DataTypes.STRING(100),
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
    apvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    apvtotalamount: {
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
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conduct: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
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
    institution: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    invitedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    oedatefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    oedateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    oeformdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "oeformfile1_oeformdocnum_unique"
    },
    others: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ottimefrm: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ottimeto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    procdte: {
      type: DataTypes.STRING(30),
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
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schoolto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topic2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalamount: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    typeofengage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    venue: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    viewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oeformfile1'
  });
};
