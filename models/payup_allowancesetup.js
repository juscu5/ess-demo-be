/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payup_allowancesetup', {
    allowancecde: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    deductonot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endtime: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    grceprd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    incholrdhrs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    include_wknd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_grceprd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_minhrs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_onhol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_onot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_onrd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_perhr: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_timeprd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minhrs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    on_shift: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    periodtype: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rndotdwn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rndotup: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roundoffot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    starttime: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payup_allowancesetup'
  });
};
