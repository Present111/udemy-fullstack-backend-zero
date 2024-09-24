const express = require('express');
const { getHomepage } = require('../controllers/homeController')
const { getABC } = require('../controllers/homeController')
const { getPresent111, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/present111', getPresent111);

router.post('/create-user', postCreateUser);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/update-user', postUpdateUser);

module.exports = router;