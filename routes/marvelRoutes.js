const express = require('express');
const router = express.Router();
const { getMovies, createMovie } = require('../controllers/marvelController');

router.get('/movies', getMovies);
router.post('/movies', createMovie);

module.exports = router;
