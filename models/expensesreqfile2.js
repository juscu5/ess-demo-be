/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expensesreqfile2', {
    apvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bfamnt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(50),
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
    expamount: {
      type: DataTypes.STRING(200),
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
    expdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expissuer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    expnotes: {
      type: DataTypes.STRING(200),
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
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_last: {
      type: DataTypes.STRING(50),
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
    locationfrm: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    locationto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    procdte: {
      type: DataTypes.STRING(50),
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
    tmefrm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmeto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmp_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expensesreqfile2'
  });
};
