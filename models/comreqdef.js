/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comreqdef', {
    max_leave: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_ob: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_ot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_ul: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_leave: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_ob: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_ot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_ul: {
      type: DataTypes.INTEGER,
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
    tableName: 'comreqdef'
  });
};
