const sequelize = require('../config/connection');
const { Comment, Post, User, Like } = require('../models');

const userdata = [
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

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
