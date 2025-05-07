import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Schedule: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>일정</h1>
        <ul>
          <li>Event 1: May 12, 2025</li>
          <li>Event 2: June 8, 2025</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;