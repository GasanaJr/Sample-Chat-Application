module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  },{});

  Chat.associate = function(models) {
    Chat.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });
  };
  return Chat
}