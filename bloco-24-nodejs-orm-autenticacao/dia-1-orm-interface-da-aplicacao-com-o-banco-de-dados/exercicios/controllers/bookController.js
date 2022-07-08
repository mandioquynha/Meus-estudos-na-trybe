const bookServices = require('../services/bookServices');


const list = async (_req, res) => {
  const book = await bookServices.list();
  if (!book) return res.status(404).json({ message: 'Not found'});
  return res.status(200).json(book);
};

module.exports = { list };