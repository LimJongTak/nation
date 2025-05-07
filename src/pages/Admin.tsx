import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Admin Panel</h1>
        <p>Manage content and monitor the system from here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;