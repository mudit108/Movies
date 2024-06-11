const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('index', { movies });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.render('movie', { movie });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.addMovie = (req, res) => {
    res.render('addMovie');
};

exports.createMovie = async (req, res) => {
    try {
        const { title, genre, description, year, image } = req.body;
        const newMovie = new Movie({
            title,
            genre,
            description,
            year,
            image
        });
        await newMovie.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.editMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.render('editMovie', { movie });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const { title, genre, description, year, imageUrl } = req.body;
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        movie.title = title;
        movie.genre = genre;
        movie.description = description;
        movie.year = year;
        movie.imageUrl = imageUrl;

        await movie.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
