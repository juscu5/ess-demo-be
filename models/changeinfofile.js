/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('changeinfofile', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fieldvalue: {
      type: DataTypes.STRING(30),
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
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'changeinfofile'
  });
};
