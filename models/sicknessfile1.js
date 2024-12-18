/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sicknessfile1', {
    adjsalcreamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    confinedateend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    confinedatestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dailyallow: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "sicknessfile1_empcode_sickdate_unique"
    },
    emprettowork: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    emprettoworkdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    enotifdate: {
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
    notifdaterec: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sickbentyp: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sickdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      unique: "sicknessfile1_empcode_sickdate_unique"
    },
    sicknessamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    sickoccur: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    slwpaynumdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totnumdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    tableName: 'sicknessfile1'
  });
};
