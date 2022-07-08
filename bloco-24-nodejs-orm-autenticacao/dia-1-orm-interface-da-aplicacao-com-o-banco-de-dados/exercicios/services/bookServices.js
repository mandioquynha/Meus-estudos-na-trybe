const { books } = require('../models');

const list = async () => {
  const books = await books.findAll();
  return books;
};

module.exports = { list }