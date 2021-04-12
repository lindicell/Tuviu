module.exports = ({ movieService, exception }) => ({
    execute: async () => {
        const movies = await movieService.getMovies();

        if(!movies.length)
            throw exception.notFound('notFound', 'no_movies_found', [`No one movie found.`]);

        return movies;
    }
});