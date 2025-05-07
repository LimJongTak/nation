import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Notices: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>공지사항</h1>
        <p>국토 공지</p>
      </main>
      <Footer />
    </div>
  );
};

export default Notices;