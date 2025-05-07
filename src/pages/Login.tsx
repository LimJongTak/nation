import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>로그인</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;