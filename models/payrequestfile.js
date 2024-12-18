/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payrequestfile', {
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrapprver1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrapprver2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrrequest: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payrequestfile'
  });
};
