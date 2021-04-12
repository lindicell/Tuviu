'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const movieSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            required: true
        },
        movie_genre: {
            type: Object,
            required: true
        },
        cast: {
            type: Object,
            required: true
        },
        languages: {
            type: Object,
            required: true
        },
        creation_year: {
            type: Date,
            required: true
        },
        published_date: {
            type: Date,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        subtitles: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        stars: {
            type: Number,
            required: true
        }
    }, { versionKey: false });

    movieSchema.plugin(paginate);

    return connection.model('movie', movieSchema);
};
