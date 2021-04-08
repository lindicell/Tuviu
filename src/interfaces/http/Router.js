const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

module.exports = ({
    container,
    loggerMiddleware,
    swaggerOptions,
    httpErrorMiddleware,
    exception
}) => {
    const apiRouter = Router();

    apiRouter
        .use(loggerMiddleware)
        .use(methodOverride('X-HTTP-Method-Override'))
        .use(cors())
        .use(bodyParser.json())
        .use(compression())
        .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)))
        .use('/api/ceps', container.cradle.routerRegister.register(container.cradle.cepRouter))
        .use('/api/movies', container.cradle.routerRegister.register(container.cradle.movieRouter))
        .use((req, res, next) => { next(exception.notFound()); })
        .use(httpErrorMiddleware);

    return apiRouter;
};
