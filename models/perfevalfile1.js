/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile1', {
    company_cde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evaldte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    evaldtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    evaldteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    evalempcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evalfrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    evalfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    evalto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    is_lock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_used: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_view: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lvleval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    percde2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    perdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmsdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    whereis: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfevalfile1'
  });
};
