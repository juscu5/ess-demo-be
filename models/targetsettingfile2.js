/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('targetsettingfile2', {
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
    tsdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tsdocnum_order: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cancel_reason1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    perspcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    strategic_obj: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    key_res_area: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    objective: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kpi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trgt_dte: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kpi_def: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    strategy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'targetsettingfile2'
  });
};
