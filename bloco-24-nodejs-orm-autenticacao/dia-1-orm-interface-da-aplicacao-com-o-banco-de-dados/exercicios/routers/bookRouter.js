const { Router } = require('express');

const bookController = require('../controllers/bookController');

const router = Router();

router.get('/', bookController.list);

module.exports = { router }