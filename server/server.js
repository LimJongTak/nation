const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const app = express();

// DB 연결
connectDB();

// 미들웨어 설정
app.use(express.json());

// 라우팅 설정
app.use('/api', userRoutes);

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});