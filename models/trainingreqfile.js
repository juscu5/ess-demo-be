/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingreqfile', {
    approve: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dtefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ini_notif: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    regend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    regstrt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingreqfile'
  });
};
