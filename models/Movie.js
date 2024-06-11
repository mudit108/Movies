const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Movie', MovieSchema);
