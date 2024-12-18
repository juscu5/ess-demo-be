/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfile2', {
    attendance: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    attn_stat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    attstatus: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    schdtefrm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    schdteto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trainingdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trainor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trngtyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trng_type: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    emptyp: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    joblvlcde: {
      type: DataTypes.STRING(90),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfile2'
  });
};
