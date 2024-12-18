/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher_course_taken', {
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    incdate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sched_day: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sched_time: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teacher_course_taken'
  });
};
