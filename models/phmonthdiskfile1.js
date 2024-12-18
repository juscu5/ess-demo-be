/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phmonthdiskfile1', {
    DiskNo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NumEmp1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NumEmp2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NumEmp3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PaidDte1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PaidDte2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PaidDte3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PBRNum1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PBRNum2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PBRNum3: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PhilDiskEmpAdd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PhilDiskEmpID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PhilDiskEmpNam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PhilDiskSigNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PhilDiskSigPos: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    },
    TotCon: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    TotCon1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    TotCon2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    TotCon3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    }
  }, {
    sequelize,
    tableName: 'phmonthdiskfile1'
  });
};
