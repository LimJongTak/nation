import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>회원가입</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Register;