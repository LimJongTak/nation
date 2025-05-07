import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Petition: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Petition for Medical School</h1>
        <p>Join the petition to establish a medical school in the region.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Petition;