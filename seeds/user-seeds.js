const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'Jane',
    email: 'jane@aol.com',
    password: 'password123'
  },
  {
    username: 'John',
    email: 'john@aol.com',
    password: 'password1234'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
