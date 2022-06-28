const express = require("express");
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers')

const router = express.Router();


router.get("/", usersControllers.getUsers);

router.post('/signup', 
[
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(), // normalizeEmail() converts an email to a standarized format, and then isEmail() validates the email is valid
    check('password').isLength({ min: 6 })
],
 usersControllers.signup);

router.post('/login', usersControllers.login)

module.exports = router;
