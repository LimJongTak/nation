const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 사용자 로그인 API
router.post('/login', userController.login);

// 사용자 회원가입 API
router.post('/signup', userController.signup);

// 사용자 신청 처리 API
router.post('/apply', userController.apply);

module.exports = router;