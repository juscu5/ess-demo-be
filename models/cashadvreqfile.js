/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cashadvreqfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    disapprved_reason: {
      type: DataTypes.TEXT,
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
      allowNull: true,
      defaultValue: 0
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cashdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "cashadvreqfile_cashdocnum_unique"
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
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
    viewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cashadvreqfile'
  });
};
