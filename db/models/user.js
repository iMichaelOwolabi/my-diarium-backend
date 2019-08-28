export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    profileImage: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Memory, {
      foreignKey: 'userId'
    })
  };
  return User;
};