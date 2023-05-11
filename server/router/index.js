const Router = require('express').Router
const useController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min:3, max:32}),
    useController.registration);
router.post('/login', useController.login);
router.post('/logout', useController.logout);
router.get('/activate/:link', useController.activate);
router.get('/refresh', useController.refresh);
router.get('/users', authMiddleware, useController.getUser);

module.exports = router