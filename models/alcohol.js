'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alcohol = sequelize.define('Alcohol', {
    type: DataTypes.STRING,
    brandStyle: DataTypes.STRING,
    sizeML: DataTypes.DECIMAL(10,2),
    sizeOZ: DataTypes.DECIMAL(10,2),
    emptyBottleWeight: DataTypes.INTEGER,
    gramsPerOunce: DataTypes.INTEGER
  }, {});
  Alcohol.associate = function(models) {
    // associations can be defined here
  };
  return Alcohol;
};