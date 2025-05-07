import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Application: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Apply for National Pilgrimage</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Apply</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Application;