/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile2', {
    adap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ave: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cserv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    depe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    eoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    init: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    irel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    punc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reapp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfevalfile2'
  });
};
