'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    todo: DataTypes.VARCHAR,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Person.hasMany(models.Tasks, {foreignKey:'Person'})
      }
    }
  });
  return Person;
};
