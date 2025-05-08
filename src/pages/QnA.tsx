// src/pages/QnA.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const QnA: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>묻고 답하기</h1>
        <p>질문과 답변을 나누는 공간입니다.</p>
      </main>
      <Footer />
    </div>
  );
};

export default QnA;
