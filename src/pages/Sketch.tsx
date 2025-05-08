// src/pages/Sketch.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sketch: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>현장스케치</h1>
        <p>국토순례단의 진행 사진과 영상을 공유합니다.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Sketch;
