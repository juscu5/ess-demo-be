/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher_tutorfile', {
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    school: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sibling: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    siblvl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    studlvl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    studname: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teacher_tutorfile'
  });
};
