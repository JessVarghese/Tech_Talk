const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'Jane',
    password: 'password123'
  },
  {
    username: 'John',
    password: 'password1234'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
