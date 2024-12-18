/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reqnotificationfile', {
    approver: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hrstatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqstat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sublevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submodule: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reqnotificationfile'
  });
};
