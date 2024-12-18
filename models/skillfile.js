/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skillfile', {
    poeacode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    skillcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "skillfile_skillcode_subdrycde_unique"
    },
    skilldesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    skillsalary: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "skillfile_skillcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'skillfile'
  });
};
