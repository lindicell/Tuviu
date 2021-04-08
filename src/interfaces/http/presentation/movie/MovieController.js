const AsyncMiddleware = require('src/middlewares/AsyncMiddleware');

module.exports = opts => ({
    createMovie: AsyncMiddleware(async ctx => {
        const response = await opts.createMovieOperation.execute(ctx.body);
        // const respMapper = await opts.personSerializer.serialize(response);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(response);
    }),
    // getPeople: AsyncMiddleware(async ctx => {
    //     const response = await opts.getPeopleOperation.execute();
    //     const respMapper = await opts.personSerializer.arraySerializer(response);
    //     return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    // }),
    // getPersonByName: AsyncMiddleware(async ctx => {
    //     const response = await opts.getPersonByNameOperation.execute(ctx.params);
    //     const respMapper = await opts.personSerializer.serialize(response);
    //     return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    // }),
    // updatePersonByName: AsyncMiddleware(async ctx => {
    //     const response = await opts.updatePersonByNameOperation.execute(ctx.params, ctx.body);
    //     const respMapper = await opts.personSerializer.serialize(...response);
    //     return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    // })
});