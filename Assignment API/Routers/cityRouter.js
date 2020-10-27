const express = require('express');
const citiesController = require('../Controllers/citiesController');

function routes() {
    const cityRouter = express.Router();
    const controller = citiesController();
    cityRouter.route('/cities')
        .get(controller.get);

    return cityRouter;
};

module.exports = routes;