const { Post } = require('../models');

const postData = [
  {
    title: '5 predictions for bitcoin, NFTs and the future of money',
    content: 'https://www.cnet.com/personal-finance/crypto/5-predictions-for-bitcoin-nfts-and-the-future-of-money/',
    user_id: 1
  },
  {
    title: 'iPhone 14 design rumors: Buh-bye, notch; hello, hole and pill cutouts',
    content: 'https://www.cnet.com/tech/mobile/iphone-14-design-rumors/',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
