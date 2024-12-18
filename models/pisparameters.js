/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pisparameters', {
    activitylogfile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    picmode: {
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
    userlogmaxrec: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    viewpic: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'pisparameters'
  });
};
