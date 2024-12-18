/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tkmautopar', {
    blnkdtrupdtetime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dtrgentype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtrupdtetime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lastblnkdtrupdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastdtrupdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    updtedtrinterval: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tkmautopar'
  });
};
