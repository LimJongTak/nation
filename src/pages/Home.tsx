import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Nation Project</h1>
        <p>Explore the national pilgrimage and more.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;