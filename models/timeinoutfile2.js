/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeinoutfile2', {
    actdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    dtetim: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    in_out: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydte: {
      type: DataTypes.DATE,
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
    timeio: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    timereg: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'timeinoutfile2'
  });
};
