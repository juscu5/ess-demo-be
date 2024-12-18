/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('undertimepolicyfile', {
    appliedto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    utminfrom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    utminpen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    utminto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'undertimepolicyfile'
  });
};
