/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companyevent', {
    compcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptcde: {
      type: DataTypes.STRING(20),
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
    eventcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    eventdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    evntdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poscde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    priority: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timfrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    timto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmfrmampm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmfrmh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmfrmm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmtoh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmtom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'companyevent'
  });
};
