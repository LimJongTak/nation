import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Notices: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Notices</h1>
        <p>Upcoming events and important announcements.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Notices;