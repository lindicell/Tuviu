module.exports = ({ movieRepository }) => ({
    createMovie: async (data) => {
        return await movieRepository.createMovie(data);
    },

    getMovies: async () => {
        return await movieRepository.getMovies();
    },

    getMovieById: async (id) => {
        return await movieRepository.getMovieById(id);
    },

    getMovieByName: async (name) => {
        return await movieRepository.getMovieByName(name);
    },

    findMovies: async (options) => {
        let result;
        try {
            result = await movieRepository.findMovies(options);
        } catch (err) {
            this.logger.error('ERROR - FindMovies - Seacrh Movies.', err);
        }
        return result;
    },

    updateMovieByName: async (name, body) => {
        return await movieRepository.updateMovieByName(name, body);
    }
});