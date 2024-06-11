const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getMovies);
router.get('/movie/:id', movieController.getMovieById);
router.get('/add-movie', movieController.addMovie);
router.post('/add-movie', movieController.createMovie);
router.get('/edit-movie/:id', movieController.editMovie);
router.post('/edit-movie/:id', movieController.updateMovie);
router.post('/delete-movie/:id', movieController.deleteMovie);

module.exports = router;
