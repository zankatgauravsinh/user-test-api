var express = require('express');
var router = express.Router();
const userController = require('../controller/user-controller');
/* GET users listing. */

router.get('/user', userController.getAllUsers);
router.post('/user', userController.createUser);


module.exports = router;
