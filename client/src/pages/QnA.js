import React, { useState, useEffect } from 'react';

const QnA = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // 질문 데이터 불러오기
    fetch('/api/qna')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="qna">
      <h2>묻고답하기</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QnA;