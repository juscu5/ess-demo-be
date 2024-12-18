/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importfiletype', {
    fixdevnumlen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixdteformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fixdtelen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixdtestart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixemplen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixempstart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixlinesep: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fixlocidlen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixlocidstart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixtimeformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fixtimelen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixtimestart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    impcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    impdefault: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    impdir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    imptyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tabchkdte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabchkdtetime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcoldte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcoldteformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabcolemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcoltime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcoltimedateformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabcoltimedte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcoltimeformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeychkcoldte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeychkcoldtetime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycoldte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycoldteformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeycoldtetime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycoldtetimeformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeycoldtetimeval: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeycoldteval: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeycolemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycolempval: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeycoltime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycoltimeformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeycoltimeval: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tabkeypaircol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tablocid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chktimerange: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    delichksepdate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delichkseptime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicolday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicoldayformat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    delicolhh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicolhhformat: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    delicolmm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicolmmformat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    delicolmon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicolmonformat: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    delicoltt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicolyear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delicolyearformat: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    delimiter: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fixin_outlen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixin_outstart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixin_stat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fixout_stat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    skipstring: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tabcolin_out: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabcolin_stat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tabcolout_stat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tabcoltimeto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycolin_out: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tabkeycolin_stat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tabkeycolout_stat: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'importfiletype'
  });
};
