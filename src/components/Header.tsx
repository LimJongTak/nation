import React, { useState } from 'react';
import '../styles/Header.scss';  // Footer.scss를 상대 경로로 import

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">국토순례단</div>
        <ul className="nav-list">
          <li><a href="/">메인</a></li>
          <li><a href="/notices">공지사항</a></li>
          <li 
            className="dropdown" 
            onMouseEnter={toggleDropdown} 
            onMouseLeave={toggleDropdown}
          >
            <a href="/application">국토순례단 신청</a>
            {isDropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/application">신청하기</a></li>
                <li><a href="/schedule">일정</a></li>
                <li><a href="/support">지원</a></li>
              </ul>
            )}
          </li>
          <li><a href="/board">게시판</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;