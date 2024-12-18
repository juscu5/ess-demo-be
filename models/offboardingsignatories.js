/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingsignatories', {
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcde: {
      type: DataTypes.STRING(50),
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
    taskcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    signatory_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_received: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_signed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'offboardingsignatories'
  });
};
