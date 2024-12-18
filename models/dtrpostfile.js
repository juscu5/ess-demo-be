/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtrpostfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dtrdocnum: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dtrpostdte1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dtrpostdte2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    postdte_str: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "DTR"
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dtrpostfile'
  });
};
