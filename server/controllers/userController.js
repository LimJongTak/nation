const User = require('../models/User');  // 사용자 모델

// 로그인 처리
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (user) {
    res.status(200).json({ message: '로그인 성공', user });
  } else {
    res.status(400).json({ message: '로그인 실패' });
  }
};

// 회원가입 처리
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(201).json({ message: '회원가입 성공' });
  } catch (error) {
    res.status(400).json({ message: '회원가입 실패', error });
  }
};

// 국토순례단 신청 처리
const apply = async (req, res) => {
  const { name, email, phone } = req.body;
  // 신청 정보를 DB에 저장 (예: 신청자 정보)
  console.log({ name, email, phone });
  res.status(201).json({ message: '신청이 완료되었습니다.' });
};

module.exports = { login, signup, apply };