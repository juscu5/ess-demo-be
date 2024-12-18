/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sssloandiskfile1', {
    branchcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    diskempadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    diskempid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    diskempnam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    diskno: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    disksignam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    disksigpos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    numrec: {
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
    repmon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    repyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sbrdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sbrnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    totamr: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totpen: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'sssloandiskfile1'
  });
};
