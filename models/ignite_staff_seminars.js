/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ignite_staff_seminars', {
    class_adviser: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    club_moderator: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_time: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eval_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    how: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mentor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name_participant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oras: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    organizer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    others: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    others_input: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    others_input1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    others_input2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rec_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_2_dep: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rec_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_3_CA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rec_3_GS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rec_3_HS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rec_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rec_9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speaker: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subject: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title_seminar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unit_department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    venue: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ignite_staff_seminars'
  });
};
