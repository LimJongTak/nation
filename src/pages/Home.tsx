import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.scss'; // Home 전용 SCSS 파일 import

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="home-main">
        <h1>메인 화면</h1>
        <p>Home.tsx</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
