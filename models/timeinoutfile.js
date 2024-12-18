/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeinoutfile', {
    ab: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ab2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    abcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    abdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    abdays2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    actdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alu: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    alu2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    auhol: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    auholnd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    auot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    breakmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    cday: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dtin1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin5: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin6: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtotin: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtotout: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout5: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout6: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtrcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dtrlock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    earlyndothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    earlyothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    edited_data: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    edtetim: {
      type: DataTypes.STRING(15),
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
    excessot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    holdate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    holdate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    holtyp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    holtyp1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    holtyp2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    in1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    in2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    in3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    in4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    in5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    in6: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    late: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    late2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    latehrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    latehrs2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    lateorig: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leg2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    legtyp: {
      type: DataTypes.STRING(10),
      allowNull: true
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
    locationid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    logremarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ltcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    manualcompute: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    merit: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    merit2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    multibreak: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    orig_data: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    otasrst: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otout: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out6: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    overbreakmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    paydte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    periodcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    reg1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    reg2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regdays1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regdays2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regnd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regnd1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regnd2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regndot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regndot1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regndot2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regndot_org: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regot1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regot2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regot_org: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarks2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sdtetim: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    shiftbatch: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sh_dtin1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtin2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtin3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtin4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtin5: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtin6: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtotin: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtotout: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtout1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtout2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtout3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtout4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtout5: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_dtout6: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sh_reg1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    sh_reg2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    splitdtr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmpndot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpndot_org: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpot_org: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpreg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpregnd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    totalot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ut: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ut1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ut2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ut3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ut4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ut5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ut6: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    utcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    uthrs2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    dtrdocnum: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segab1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    segab2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    seglt1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    seglt2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    seglthrs1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    seglthrs2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    segut1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    segut2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    seguthrs1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    seguthrs2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    edited_dtetime: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'timeinoutfile'
  });
};
