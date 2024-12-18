/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evaluation_form_file2', {
    do_this_on: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    echo_others: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    entire_ca: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entire_gs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entire_hs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    evalcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ff_dept: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inclusive_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    interested_staff: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_achieved: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_adviser: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_aware: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_echo_others: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_entire_gs_hs_ca: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_ff_dept: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_gained_relevant: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_gs_hs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_inline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_justifiable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_mentor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_moderator: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_next_years: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_others: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_possesed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_rec_others: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_related: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_related_to_job: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_send_participants: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_teacher: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    organizer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    others: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rec_others: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    seminar_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    speaker: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    through_faculty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    through_sharing: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    through_workshop: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trncde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    venue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    within_dept: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'evaluation_form_file2'
  });
};
