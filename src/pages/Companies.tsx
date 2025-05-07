import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Companies: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>회사, 기업, 업체, 단체</h1>
        <p>List of companies, organizations, and institutions supporting the project.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;