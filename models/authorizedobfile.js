/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorizedobfile', {
    actdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ess_apprv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    inclunbrk: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    numbreak: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    obcompany: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obcontnum: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    obcontper: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obdatein1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obdateout1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obin1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obin2: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obin3: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obin4: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obin5: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obin6: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obindate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obinmiltime1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obinmiltime2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obinmiltime3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obinmiltime4: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obinmiltime5: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obinmiltime6: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obnote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    obout1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obout2: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obout3: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obout4: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obout5: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    obout6: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    oboutdate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    oboutmiltime1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oboutmiltime2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oboutmiltime3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oboutmiltime4: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oboutmiltime5: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oboutmiltime6: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    paydte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reasoncde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_processed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'authorizedobfile'
  });
};
