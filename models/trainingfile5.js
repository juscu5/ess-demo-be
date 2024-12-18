/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfile5', {
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    based: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    crstruc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    done: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dtp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gs: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    help: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ibamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ibcategcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ibcurrency: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ibnoofpart: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ibtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rttsc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    senddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    skcc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tcmel: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tco: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    te: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    trainingdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfile5'
  });
};
