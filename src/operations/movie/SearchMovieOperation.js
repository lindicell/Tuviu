module.exports = ({ movieService, exception }) => ({
    execute: async (filters = {}) => {
        const movies = await movieService.findMovies({ query: filters });

        // if (!movies.length)
        //     throw exception.notFound('notFound', 'no_movies_found', [`No one movie found.`]);

        return movies;
    }
});