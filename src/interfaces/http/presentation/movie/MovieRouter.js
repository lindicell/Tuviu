module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  person/:
         *   post:
         *      tags:
         *          - person
         *      summary: This should create person.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: User return with success.
         *        400:
         *          description: Bad Request.
         */
        {
            method: 'post',
            path: '/',
            validation: {
                body: ctx.movieSchema.createMovie,
            },
            handler: ctx.movieController.createMovie
        },
        // {
        //     method: 'get',
        //     path: '/',
        //     validation: {
        //     },
        //     handler: ctx.movieController.getMovieByName
        // },
        // {
        //     method: 'get',
        //     path: '/:name',
        //     validation: {
        //         params: ctx.movieSchema.getByName,
        //     },
        //     handler: ctx.movieController.getPersonByName
        // },
        // {
        //     method: 'put',
        //     path: '/:name',
        //     validation: {
        //         params: ctx.movieSchema.getByName,
        //         body: ctx.movieSchema.update,
        //     },
        //     handler: ctx.movieController.updatePersonByName
        // },

    ];
};