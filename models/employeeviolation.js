/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeviolation', {
    amount: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    casedocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0.00000"
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dteissue: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    evaluation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    frequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    infdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    recommendation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reprimand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    susdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    susdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vioattachment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    viocode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    viocondition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    viodate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vioday: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    viodesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viof2_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    violettercode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    violevel: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    viosanc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    viostatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    viotitle: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeviolation'
  });
};
