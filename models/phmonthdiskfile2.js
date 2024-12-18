/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phmonthdiskfile2', {
    DiskNo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ECM1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ECM2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ECM3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    EffDte: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EmpCom: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    EmpNum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EmpSta: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FullName: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    LName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PBRDte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PBRNum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PCM1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    PCM2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    PCM3: {
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
    RepQtr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RepTyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RepYer: {
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
    tableName: 'phmonthdiskfile2'
  });
};
