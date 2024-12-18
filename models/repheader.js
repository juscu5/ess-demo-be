/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repheader', {
    header1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header10: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header11: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header12: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header13: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header14: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header15: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header16: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header17: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header18: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header19: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header20: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    headerdte1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    headerdte2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    headerdte3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    headerdte4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    headerdte5: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    headernum1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    headernum2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    headernum3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    headernum4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    headernum5: {
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repheader'
  });
};
