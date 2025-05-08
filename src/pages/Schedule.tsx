import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Schedule.scss';

// 걷는 거리와 관련된 데이터를 계산하는 컴포넌트
const Schedule: React.FC = () => {
  const totalDistance = 82.3; // 전체 거리 (82.3km)
  const totalDays = 7; // 6박 7일
  const startDate = new Date(2025, 5, 25); // 시작 날짜: 2025년 6월 25일
  const endDate = new Date(2025, 6, 1); // 종료 날짜: 2025년 7월 1일

  const dailyDistance = totalDistance / totalDays; // 하루에 걷는 거리

  const [currentDistance, setCurrentDistance] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [currentDate, setCurrentDate] = useState(startDate);

  // 일정에 맞춰 이동 거리 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentDistance < totalDistance && currentDate <= endDate) {
        setCurrentDistance((prev) => prev + dailyDistance);
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
      }
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(timer);
  }, [currentDistance, currentDate]);

  useEffect(() => {
    setPercentage((currentDistance / totalDistance) * 100);
  }, [currentDistance]);

  return (
    <div>
      <Header />
      <main className="schedule-main">
        <h1>국토순례단 이동 거리</h1>
        <div className="distance-container">
          <img
            src="/images/walking-person.gif" // 걷는 사람의 GIF 파일 경로 변경
            alt="Walking"
            className="walking-gif"
          />
          <div className="distance-info">
            <p>현재 {currentDistance.toFixed(2)} km를 걷고 있습니다.</p>
            <p>{percentage.toFixed(2)}%를 완료했습니다.</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        <ul>
          <li>Event 1: May 12, 2025</li>
          <li>Event 2: June 8, 2025</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
