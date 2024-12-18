/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantinterview', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    interviewer: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    intrvw_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    intrvw_stat: {
      type: DataTypes.STRING(50),
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantinterview'
  });
};
