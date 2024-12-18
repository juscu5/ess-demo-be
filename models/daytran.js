/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daytran', {
    actdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    approver: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    distance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dtetim: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ess_apprv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inout_type: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    in_out: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    locationid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paydte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timeio: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    timereg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    updsta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    timelog_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cancel_requestby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cancel_remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cancel_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    latitude_req: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitude_req: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    syncdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    synctime: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    is_outsiderange: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'daytran'
  });
};
