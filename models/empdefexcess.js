/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empdefexcess', {
    apprvedte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    excessearned: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    excessleft: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    excessused: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    expdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    from_ess: {
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
    rectyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmpearned: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmpleft: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmpused: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dteexpire: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    excesshrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    otdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empdefexcess'
  });
};
