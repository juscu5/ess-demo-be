/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantresult', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    demodate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fidate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ft: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ftdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    modeofapp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    panel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    paneldate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pe: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pos1: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    pos2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    qtdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    qtresult: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    referralby: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    resdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    resfor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    result: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resultby: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    rs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tspeed: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantresult'
  });
};
