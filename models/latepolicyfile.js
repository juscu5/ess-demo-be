/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('latepolicyfile', {
    appliedto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ltminfrom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ltminpen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ltminto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'latepolicyfile'
  });
};
