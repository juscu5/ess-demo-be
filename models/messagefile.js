/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messagefile', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deptcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    msgbody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    poscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sndercde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sndername: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subject: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trntime: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'messagefile'
  });
};
