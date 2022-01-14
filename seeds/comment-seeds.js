const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Interesting read.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I still like my iPhone Xs',
    user_id: 2,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
