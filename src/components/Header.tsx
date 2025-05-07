import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">메인</a></li>
          <li><a href="/notices">공지사항</a></li>
          <li><a href="/application">국토순례단 신청</a></li>
          <li><a href="/board">게시판</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;