import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/notices">Notices</a></li>
          <li><a href="/application">Application</a></li>
          <li><a href="/board">Board</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;