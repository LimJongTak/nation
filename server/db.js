const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUrl);  // 옵션 제거
    console.log('DB 연결 성공');
  } catch (err) {
    console.error('DB 연결 실패:', err);
    process.exit(1);
  }
};

module.exports = connectDB;