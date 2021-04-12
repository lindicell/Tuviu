module.exports = ({ movieService, exception }) => ({
    execute: async body => {
        const { title } = body;
        //andrei
        const movie = await movieService.getMovieByName(title);

        if (movie)
            throw exception.duplicateKeyError('duplicateKeyError', 'movie_already_exist', [`Movie "${title}" already exists`]);

        return await movieService.createMovie(body);
    }
});