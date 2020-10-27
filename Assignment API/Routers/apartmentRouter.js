const express = require('express');
const apartmentsController = require('../Controllers/apartmentsController');

function routes() {
    const router = express.Router();
    const controller = apartmentsController();
    router.route('/apartments')
        .get(controller.get);
    return router;
};

module.exports = routes;