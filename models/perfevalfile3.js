/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile3', {
    apprslcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    apprslcodecom: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evalempcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_review: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lvldsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lvleval: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notif_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pmsdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfevalfile3'
  });
};
