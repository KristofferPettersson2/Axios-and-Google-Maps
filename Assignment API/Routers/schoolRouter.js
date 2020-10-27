const expressRouter = require('express');
const schoolController = require('../controllers/schoolController');

function routes() {
    const router = expressRouter.Router();
    const controller = schoolController();

    /* Teachers */
    router.route('/teachers')
        .get(controller.getTeachers);

    /* Classes */
    router.route('/courses')
        .get(controller.getCourses);

    /* Cart (requires customerId URL parameter) */
    router.route('/cart')
        .get(controller.getCart);

    return router;
};

module.exports = routes;

