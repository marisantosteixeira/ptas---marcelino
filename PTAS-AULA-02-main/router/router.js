const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.get('/user', userController.findUsers);
routes.post('/user', userController.createUser);
routes.post('/user', userController.selectUsers);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);
routes.post('/user/authenticated', userController.autenticarUser);

module.express = routes;