import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Petition: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>의대설립 청원</h1>
        <p>국립순천대학교 의대설립 청원</p>
      </main>
      <Footer />
    </div>
  );
};

export default Petition;