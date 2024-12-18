/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesetupfile7', {
    accptdby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comment1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comment2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comment3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contct: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    evfrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    evto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lvlcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lvldesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ntdby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    recom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    strtdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    viodte1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    viodte2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    viodte3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    viodte4: {
      type: DataTypes.DATE,
      allowNull: true
    },
    violation1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    violation2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    violation3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    violation4: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pesetupfile7'
  });
};
