import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router Link 사용
import '../styles/Header.scss';  // Header.scss를 상대 경로로 import

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMedSchoolDropdownVisible, setMedSchoolDropdownVisible] = useState(false); // 의과대학 설립 드롭다운
  const [isBoardDropdownVisible, setBoardDropdownVisible] = useState(false); // 게시판 드롭다운

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMedSchoolDropdown = () => {
    setMedSchoolDropdownVisible(!isMedSchoolDropdownVisible);
  };

  const toggleBoardDropdown = () => {
    setBoardDropdownVisible(!isBoardDropdownVisible);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">의료 불균형을 걷다</div>
        <ul className="nav-list">
          <li><a href="/">메인</a></li>
          <li><a href="/notices">공지사항</a></li>
          
          {/* 국토순례단 신청 드롭다운 */}
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
              </ul>
            )}
          </li>

          {/* 의과대학 설립 드롭다운 */}
          <li 
            className="dropdown" 
            onMouseEnter={toggleMedSchoolDropdown} 
            onMouseLeave={toggleMedSchoolDropdown}
          >
            <a href="#">의과대학 설립</a>
            {isMedSchoolDropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/petition">서명 운동</a></li>
                <li><a href="/persona">페르소나</a></li>
                <li><a href="/needformed">필요성</a></li>
                <li><a href="/companies">서명 단체</a></li>
                <li><a href="/support">후원&협찬</a></li>
              </ul>
            )}
          </li>
          
          {/* 게시판 드롭다운 */}
          <li 
            className="dropdown" 
            onMouseEnter={toggleBoardDropdown} 
            onMouseLeave={toggleBoardDropdown}
          >
            <a href="#">게시판</a>
            {isBoardDropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/freeboard">자유게시판</a></li>
                <li><a href="/sketch">현장스케치</a></li>
                <li><a href="/qna">묻고 답하기</a></li>
              </ul>
            )}
          </li>
        </ul>

        {/* 로그인 버튼 (회원가입 버튼은 제거됨) */}
        <div className="auth-buttons">
          <Link to="/login">
            <button className="auth-button">로그인</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
