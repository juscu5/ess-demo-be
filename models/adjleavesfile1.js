/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adjleavesfile1', {
    adjleavedocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ampm: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
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
    apvdays: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    apvhrs: {
      type: DataTypes.DECIMAL,
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
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    disapprved_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATE,
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
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    leaveday: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leavedtefrm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leavedteto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leavehrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leavenote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leavereason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leavetyp2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leavetype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
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
    reqdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reqdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reqstr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    totaldays: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    viewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'adjleavesfile1'
  });
};
