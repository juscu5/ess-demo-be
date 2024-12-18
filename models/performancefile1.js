/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('performancefile1', {
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evalcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evalfullname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reviewer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trncde: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'performancefile1'
  });
};
