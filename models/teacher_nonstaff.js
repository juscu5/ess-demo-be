/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher_nonstaff', {
    apptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    natwork: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'teacher_nonstaff'
  });
};
