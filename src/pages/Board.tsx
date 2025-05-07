import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Board: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Board</h1>
        <p>Here you can post questions, sketches, and more.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Board;