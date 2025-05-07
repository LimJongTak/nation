import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>메인 화면</h1>
        <p>Home.tsx</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;