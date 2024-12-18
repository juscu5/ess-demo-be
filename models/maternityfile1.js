/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maternityfile1', {
    actdeldate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adjsalcreamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    dailyallow: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    deldate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      unique: "maternityfile1_empcode_deldate_unique"
    },
    deltyp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "maternityfile1_empcode_deldate_unique"
    },
    maternityamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    mleavedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    monthfrom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    monthto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    noti_delnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    noti_miscarnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    noti_pregcnt: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    numdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    numpreg: {
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
    totsalcreamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    t_salcreamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    yearfrom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    yearto: {
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
    tableName: 'maternityfile1'
  });
};
