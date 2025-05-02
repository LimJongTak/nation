import React from 'react';

const Schedule = () => {
  return (
    <div className="schedule">
      <h2>일정</h2>
      <ul>
        <li>
          <strong>2025년 5월 15일</strong>: 국토순례단 오리엔테이션
        </li>
        <li>
          <strong>2025년 5월 20일</strong>: 순례 시작
        </li>
        {/* 더 많은 일정 추가 */}
      </ul>
    </div>
  );
};

export default Schedule;