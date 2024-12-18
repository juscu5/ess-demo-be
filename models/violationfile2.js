/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('violationfile2', {
    amount: {
      type: DataTypes.STRING(100),
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
    viocode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    viocondition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    viof2_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    violvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viosanc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    viotitle: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'violationfile2'
  });
};
