import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Persona: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Persona</h1>
        <p>Learn about the personas affected by medical disparities in our region.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Persona;