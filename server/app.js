const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db');

const app = express();

// DB 연결
connectDB();

// 미들웨어 설정
app.use(cors());  // CORS 설정
app.use(bodyParser.json());  // JSON 데이터 파싱

// 라우팅 설정
app.use('/api', userRoutes);

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});