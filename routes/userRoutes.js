const express = require('express');
const router = express.Router();

const usersController = require('../controllers/userController');

// Formulario de registro
router.get('/register', usersController.register);

// Formulario de login
router.get('/login', usersController.login);

// Perfil de Usuario
router.get('/profile/:userId', usersController.profile);

module.exports = router;