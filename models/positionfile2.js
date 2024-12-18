/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positionfile2', {
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jobdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    joblvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    posdesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "posdesc_subdrycde"
    },
    postypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qualif: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    skill1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    skill2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    skill3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    skill4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    skill5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    skill6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "posdesc_subdrycde"
    }
  }, {
    sequelize,
    tableName: 'positionfile2'
  });
};
