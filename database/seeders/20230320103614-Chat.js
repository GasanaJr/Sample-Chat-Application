module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Chats',
    [
      {
        content: 'Hello Bro',
        userId:  1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Hello Brother',
        userId:  1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Chats', null, {}),
};
