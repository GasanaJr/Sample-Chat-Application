const { Router } = require('express');
const controllers = require('../controllers')

const router = Router();

router.get('/messages', controllers.getChats);
router.post('/user/create', controllers.createUser);
router.post('/user/login', controllers.loginUser);

module.exports = router