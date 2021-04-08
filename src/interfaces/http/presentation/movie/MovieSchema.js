const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    createMovie: joi.object().keys({
        name: joi.string().required(),
        movie_genre: joi.array().items(
            joi.string().required()
        ).required(),
        creation_year: joi.date().format('YYYY').options({ convert: true }).raw().required(),
        published_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw().required(),
        author: joi.string().required(),
        stars: joi.number().max(5).default(0)
    }),
    // getMovieByName: joi.object().keys({
    //     name: joi.string().required()
    // }),
    // updateMovie: joi.object().keys({
    //     name: joi.string(),
    //     profession: joi.string(),
    //     cpf: joi.string(),
    //     birth_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw(),
    //     phone: joi.string(),
    //     email: joi.string().email(),
    //     city: joi.string(),
    //     state: joi.string().valid(...EnumState.values()),
    //     address: joi.string(),
    //     cep: joi.string(),
    //     coren: joi.string()
    // }),
    // deleteMovie: joi.object().keys({
    //     id: joi.string().required()
    // })
});