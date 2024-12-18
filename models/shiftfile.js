/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shiftfile', {
    authhol: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    authrstday: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    breakhours: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    breakmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
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
    legtyp: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "AUTO"
    },
    legtypx: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    maxbreakmin: {
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
    rttimeout1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rttimeout2: {
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
    starttimein: {
      type: DataTypes.STRING(5),
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
    timeout1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    timeout2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    totaldailyhrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shiftfile'
  });
};
