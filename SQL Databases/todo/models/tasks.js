'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    chores: DataTypes.VARCHAR,
    personId: DataTypes.
  }, {
    classMethods: {
      associate: function(models) {
        Tasks.belongsTo(models.Person, {foreignKey:'personId'})
      }
    }
  });
  return Tasks;
};
