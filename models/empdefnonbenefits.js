/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empdefnonbenefits', {
    bencode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bendesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    benlimit: {
      type: DataTypes.STRING(50),
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
    entry_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empdefnonbenefits'
  });
};
