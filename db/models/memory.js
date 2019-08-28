export default (sequelize, DataTypes) => {
  const Memory = sequelize.define('Memory', {
    memory: DataTypes.STRING,
    memoryDate: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {});
  return Memory;
};