// src/pages/FreeBoard.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FreeBoard: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>자유게시판</h1>
        <p>자유롭게 의견을 나누는 공간입니다.</p>
      </main>
      <Footer />
    </div>
  );
};

export default FreeBoard;