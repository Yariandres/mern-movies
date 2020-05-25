const express = require('express')

const MovieCtrl = require('../controllers/movie-controller');

const router = express.Router();

router.post('/movie', MovieCtrl.createMovie);
router.delete('/movie/:id', MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);

module.exports = router;