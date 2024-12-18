/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repprojbase', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payrollrun: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    period: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    padays: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pahrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    basic: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    paabdays: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    paabhrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    abamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    palthrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    paltmins: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ltamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pauthrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pautmins: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    utamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    piee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    otamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    allowamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    earningsamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deductionsamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ssscontee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    medee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    withtax: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    othrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sssconter: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    meder: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pier: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tot13thmonth: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sssamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    phamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    piamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    taxamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'repprojbase'
  });
};
