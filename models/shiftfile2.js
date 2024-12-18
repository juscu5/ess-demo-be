/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('shiftfile2', {
    authhol: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    authrstday: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    autodedbrkmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    autootded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    break1duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    break2duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    break3duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    break4duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    break5duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    breakhours: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    breakmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    btd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chk24hrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkbreakpaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconlate: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkconut: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkcot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkearlyutpol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkearlyutpolmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    chkignab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkignltut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkltbracket: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkltbracket_exchol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkmaxtimeout: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chknonpunch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkutbracket: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkutbracket_exchol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chk_auth1log: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    conlatehrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    conuthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    cottimein: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cottimeout: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dayafter: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    daybefore: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    dayoff: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dayoffi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dayoffs: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dedbreak_holrest: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dedbreak_holrest_duration: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    dedbreak_holrest_workhours: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    dedltot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dedltot_applltpol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dedltot_minot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    dtrvalidot: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    earlyot: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fbreakhours: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    fbreakmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    firstinlastout: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    graceperiod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    graceperiodrng: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    halfdayind: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    incbreaknd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incgrace: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    inclunbrk: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incotinout: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incrngbrk: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    incroundearlyot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    legtyp: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "AUTO"
    },
    legtypnotworkeddayb4after: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    legtypworkeddaybefore: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    legtypx: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ltpol_pershift: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    maxbreakmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    maxpunouthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    minholothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    minothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    multi: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    multibreak: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ndiffend: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ndiffstart: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nond: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    nondot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    numbreak: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    obreakhalf_ind: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    obreakhalf_ind_hrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    offsetabtoot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    offsetlttoot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    openbreak: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    openbreakhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    opentime: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    otapplyon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otasrst: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    othrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    otin: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    otout: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    otpar: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "AUTHOOT"
    },
    otpol_pershift: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ovrbrk_half: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ovrbrk_whole: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    pershift_genpol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rangebrkhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reghrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundlt: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundltmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundoff_ot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    roundoff_ot_opt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    roundot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundotmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundotupdown: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundotupdown_interval: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundotupdown_minot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundut: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundutmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    rtotin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rtotout: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rtstarttimein: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimein1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimein2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimein3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimein4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimein5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimein6: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout6: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    shiftcday: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shiftnday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    startotdedaftr: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    starttimein: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timein1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timein2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timein3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timein4: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timein5: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timein6: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout4: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout5: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout6: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    totaldailyhrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    utpol_pershift: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    grcprd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    incgrcprdrng: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incltbrk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    latecount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otbreakin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otbreakout: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    per_shiftgenpol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rtotbreakin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rtotbreakout: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    setotbreak: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    setlunlttout: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundrstmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundoff_rst: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'shiftfile2',
    timestamps: false
  });
};